var mongoose = require('mongoose');
var connect = process.env.MONGO_URI;

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);

mongoose.connection.on('connected', function(){
  console.log('successfully connected to database!')
})
// Step 1: Write your schemas here!
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: String
});

var User = mongoose.model("User", UserSchema);


// Remember: schemas are like your blueprint, and models
// are like your building!

// Step 2: Create all of your models here, as properties.

// Step 3: Export your models object

module.exports = {
  User: User,
}
