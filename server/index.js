
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();

module.exports = app;

const createApp = () => {


  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //app.use('/api', require('./api'));
  app.use('/auth', require('./auth'));
  app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

};
    const startListening = () => {
      // start listening (and create a 'server' object representing our server)
      const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
};

createApp();
startListening();

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
const authUrl = traveler.generateOAuthURL();
console.log(authUrl)
// //const public = traveler.getPublicMilestones().then((milestones)=> //console.log(milestones))

// traveler.getDestinyManifest().then(result => {
//   //console.log(result)
//   traveler.downloadManifest(result.Response.mobileWorldContentPaths.en, './manifest.content').then(filepath => {
//       console.log(filepath)
//       const manifest = new Manifest(filepath)

//       manifest.queryManifest('SELECT json FROM DestinyInventoryItemDefinition WHERE id = 227756207')
//       .then(queryResult => {
//         let result = JSON.parse(queryResult[0].json)
//         console.log(result);

//       }).catch(err => {
//           console.log(err);
//       });
//   }).catch(err => {
//       console.log(err);
//   })
// })

