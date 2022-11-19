const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    knot: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    postcode: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    ip: {
        type: String,
        trim: true
    },
    language: {
        type: String,
        trim: true
    },
    shares: {
        type: String,
        trim: true
    },
    ads: {
        type: Boolean,
        trim: true
    },
    note: {
        type: Object,
        trim: true
    }
});

module.exports = mongoose.model('Customers', customersSchema);
