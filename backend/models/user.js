var mongoose = require('mongoose')

var User = mongoose.Schema;

var userSchema = new User({
    name: String,
    interests: [ String ]
})

// compile model
var userModel = mongoose.model('UserModel', userSchema);