import mongoose import 'mongoose'

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

module.exports = mongoose.model('User', userSchema)