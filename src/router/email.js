import ModelEmail from '../models/email'

module.exports = function findByEmail (email) {
  ModelEmail.find({ email: email })
    .then(email => {
      console.log(email)
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = function updateOneEmail (oldEmail, newEmail) {
  ModelEmail.findOneAndUpdate(
    { email: oldEmail },
    { email: newEmail },
    {
      new: true,
      runValidators: true
    }
  )
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = function deleteOneEmail (email) {
  ModelEmail.findOneAndRemove({ email: email })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
}
