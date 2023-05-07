const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('profile');
}

module.exports.signIn = function(req, res){
    return res.render('user-sign-in');
}
module.exports.signUp = function(req, res){
    return res.render('user-sign-up');
}

module.exports.create = async function(req, res) {
    try {
      if (
        req.body.password != req.body.confirm_password
      ) {
        return res.redirect('back');
      }
  
      const user = await User.findOne({ email: req.body.email }).exec();
  
      if (!user) {
        const newUser = await User.create(req.body);
        return res.redirect('/users/sign-in');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log('error in creating user while signing up', err);
      return res.redirect('back');
    }
  };


module.exports.createSession = function(req, res){

}