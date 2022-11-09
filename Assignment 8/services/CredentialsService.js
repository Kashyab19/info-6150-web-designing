const CredentialsModel = require("../models/Credentials");
 
exports.getAllCreds = async () => {
  return await CredentialsModel.find();
};
 
exports.createCreds = async (creds) => {
  return await CredentialsModel.create(creds);
};
exports.getBlogByUser= async (email) => {
  return await CredentialsModel.findOne({email: email});
};
 
exports.updateCreds= async (email, creds) => {
  return await CredentialsModel.findOneAndUpdate({email: email}, creds);
};
 
exports.deleteCred = async (email) => {
  return await CredentialsModel.findOneAndDelete({email:email});
};