const router = require('express').Router();
module.exports = router;

var Traveler = require('the-traveler').default;
const Enums = require('the-traveler/build/enums')

const traveler = new Traveler({
  apikey: '87d34ac33b6d40a09196d6f1f6bc308f',
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  oauthClientId: '23344',
  oauthClientSecret: 'HmKygtFiG9jlPAuhp29NHnPx7Xu-isnt8OREMtXuC3E',
  debug: true
});


router.get('/', (req, res, next) => {
  let code = req.query.code;
  console.log('code', code)
  // traveler.searchDestinyPlayer('1', 'character0zero')
  //   .then(player => {
  //     //membershipId = player.Reseponse[0].membershipId;
  //     console.log('LOOK HERE', player.Response[0].membershipId )
  //     return player.Response[0].membershipId;
  //   })
  //   .then(membershipId => {
  //     console.log('Membership Id is ', membershipId)
  //     return traveler.getProfile('1', membershipId, { components: ['200', '201', '202', '203', '204', '205'] })
  //   })
  //   .then(profile => {
  //     console.log(profile)
  //   })
  //   .catch(err => console.log(err))

  // traveler.getProfile('1', '4611686018428389623')
  // .then(response => console.log(response));
  if (!traveler.oauth) {
    console.log('code', code)
    traveler.getAccessToken(code)
    .then(oauth => {
      traveler.oauth = oauth;
    })
    .then(() => {
      console.log('successful authorization')
      console.log('traveler', traveler.oauth.membership_id)
      //res.json(traveler.oauth)
    })
    .then(
      traveler.getProfile('2', '4611686018428389623', { components: ['500']})
      .then((profile) => {
        res.json(profile.Response.profileKiosks.data.kioskItems)
      })
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err));
  }
  else (res.json(traveler.oauth))

});

