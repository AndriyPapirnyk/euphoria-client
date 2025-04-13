const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = mongoose.Schema({
    name:{ type: String, require: true },
    email:{ type: String, require: true },
    password:{ type: String, require: false },
    type:{ type: String, require: true },
    img:{ type: String, require: true },

})
module.exports = mongoose.models.User || mongoose.model('User', userSchema);