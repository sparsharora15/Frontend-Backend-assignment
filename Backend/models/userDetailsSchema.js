
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default:true
    },
    is_liked: {
        type: Boolean,
        default:false
    },
    email: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true

        },
        suite: {
            type: String,
            required: true

        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        geo: {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
        },
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        },

    }
})
const User = mongoose.model('User', userSchema)
module.exports = User 