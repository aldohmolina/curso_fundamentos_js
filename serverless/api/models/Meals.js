const mongose = require('mongoose');
const Schema = mongose.Schema;

const Meals = mongose.Model('Meal',new Schema({
    name:String,
    desc: String
}))

module.exports = Meals