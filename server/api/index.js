const router = require('express').Router();
module.exports = router;


// The Traveler

var Traveler = require('the-traveler').default;
const Enums = require('the-traveler/build/enums')
const Manifest = require('the-traveler/build/Manifest').default;
const traveler = new Traveler({
  apikey: '87d34ac33b6d40a09196d6f1f6bc308f',
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  oauthClientId: '23344',
  oauthClientSecret: 'HmKygtFiG9jlPAuhp29NHnPx7Xu-isnt8OREMtXuC3E',
  debug: true
});

const exoticsArr = [
  -2086562154,
  -1932495695,
  -1387837740,
  -1387837739,
  -1367313650,
  -1316951066,
  -1205549507,
  -1152987950,
  -1152987949,
  -857220825,
  -745813318,
  -745813317,
  -714062716,
  -714062715,
  -665975638,
  -665975637,
  -395696689,
  -169982848,
  -104810832,
  -39698840,
  19024058,
  1331482397,
  1345867570,
  1508896098
];

let exoticsObjArr = [];

let queries = exoticsArr.map(exoticId => {
  return 'SELECT json FROM DestinyInventoryItemDefinition WHERE id = ' + exoticId;
});
let manifest;

router.get('/exotics', (req, res, next) => {

  traveler.getDestinyManifest()
  .then(result => {
    return traveler.downloadManifest(result.Response.mobileWorldContentPaths.en, './manifest.content')
  })
    .then(filepath => {
      manifest = new Manifest(filepath);
      return manifest;
    })
  .then(manifest => {
    for (let i = 0; i < queries.length; i++) {
      manifest.queryManifest(queries[i])
      .then(item => {
        exoticsObjArr.push(JSON.parse(item[0].json).displayProperties)
        console.log('exoticsobjarr', exoticsObjArr)
      });
    }
    return exoticsObjArr;
  })
  .then(exotics => {
    console.log('exotics', exotics)
    res.send(exotics)
  })
  .catch(err => {
    console.log(err);
  });
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

