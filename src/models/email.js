import mongoose from 'mongoose'
import validator from 'validator'

let emailSchema = new mongoose.Schema({
    email: {
        type: String,
        reqired: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    }
})

module.exports = mongoose.model('Email', emailSchema)