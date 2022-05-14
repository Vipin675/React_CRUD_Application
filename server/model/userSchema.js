const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    age: {
        type:Number,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    work: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    descreption: {
        type:String,
        required:true
    },
});

const users = new mongoose.model('users', userSchema);

module.exports = users;