const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const credentialsSchema = new Schema({
    email: {type: String, required: true, unique:true},
    fullname: {type: String, required: true},
    password: {type: String, required: true}
});
 
module.exports = mongoose.model("Credentials", credentialsSchema);