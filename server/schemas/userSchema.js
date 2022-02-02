const mongoose = require('mongoose');


const User = mongoose.Schema({
            firstName: {type: String, required: true}, 
            lastName: {type: String, required: true}, 
            pseudo: {type: String, required: false, default: null}, 
            address: {type: String, required: true}, 
            zip: {type: Number, required: true}, 
            city: {type: String, required: true}, 
            email: {type: String, required: true}, 
            password: {type: String, required: true}, 
        });
    


module.exports = mongoose.model('user', User);