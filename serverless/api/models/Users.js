const mongose = require('mongoose');
const Schema = mongose.Schema;

const Users = mongose.model('User',new Schema({
    email:String,
    password: String,
    salt: String,
    role: { type: String, default:'user'},
}))

module.exports = Users