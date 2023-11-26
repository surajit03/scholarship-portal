const mongoose = require('mongoose');
const {Schema} =mongoose;

const UserSchema = new Schema({
    number:{
        type: Number,
    },
    title:{
        type:String,

    },
    degrees:{
        type: String,
    },
    funds:{
        type: String,
    },
    date:{
        type: Date,
        dafault: Date.now
    },
    location:{
        type: String,
    },

});
const Schoolarships =mongoose.model('Schoolarships',UserSchema);
module.exports = Schoolarships;