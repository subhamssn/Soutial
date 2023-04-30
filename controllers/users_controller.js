module.exports.profile = function(req, res){
    return res.render('profile');
}

module.exports.signIn = function(req, res){
    return res.render('user-sign-in');
}
module.exports.signUp = function(req, res){
    return res.render('user-sign-up');
}