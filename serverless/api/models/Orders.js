const mongose = require('mongoose');
const Schema = mongose.Schema;

const Orders = mongose.Model('Order',new Schema({
    meal_id: {type: Schema.Types.ObjectId, ref: 'Meal'},
    user_id:String
}))

module.exports = Orders