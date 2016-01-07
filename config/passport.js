var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
  var User = mongoose.model('User');

  passport.use(new GitHubStrategy({
    clientID: '7a3b080379f1d3af37b1',
    clientSecret: '4650fd8e85b205202209d6ccb17815c1ba0d0225',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({
        "login": profile.username
      }, {
        "name": profile.username
      },
      function(erro, user) {
        if (erro) {
          console.log('In passport.js erro finding or creating');
          console.log(erro);
          return done(erro);
        }
        return done(null, user);
      }
    );
  }));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).exec()
      .then(function(user) {
        done(null, user);
      });
  });
};
