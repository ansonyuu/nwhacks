var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: {
        type: String,
    required: true
    },
    role: {
        type: String,
        required: true
    }, 
    careHome: {
        type: String
    },
    languages: {
        type: [ String ], 
        required: true,
    },
    interests: {
        type: [ String ], 
        required: true
    }
});

// Export Contact model
var User = mongoose.model('user', userSchema);

module.exports = {
    User
}

// module.exports.get = function (callback, limit) {
//     Contact.find(callback).limit(limit);
// }