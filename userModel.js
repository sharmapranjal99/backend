const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sharmapranjal99:pranjal99@clusterbackend.n65mqw7.mongodb.net/?appName=clusterBackend")
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

const userSchema = new mongoose.Schema({
  empname: String,
  eusername: String,
  email: String
});

module.exports = mongoose.model("user", userSchema);