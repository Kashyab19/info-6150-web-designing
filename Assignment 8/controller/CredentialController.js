const credentialServiceVar = require("../services/CredentialsService");
 
exports.getAllCreds = async (req, res) => {
  try {
    const blogs = await credentialServiceVar.getAllCreds();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCreds = async (req, res) => {
  try {
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let regexEmail = /^([a-zA-Z0-9_\.]+)@([a-z_\-\.]+)\.([a-z]{2,5})$/;
    let regexName = /^([a-zA-Z]+)\s([a-zA-Z]+)$/;

    if(!regexPassword.test(req.body.password)){
      res.status(500).json({ error: "A password must have 8 characters. Atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"});
      return;
    }
    if(!regexEmail.test(req.body.email)){
      res.status(500).json({ error: "Invalid Email"});
      return;
    }

    if(!regexName.test(req.body.fullname)){
      res.status(500).json({ error: "Invalid Name"});
      return;
    }
    const blog = await credentialServiceVar.createCreds(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getBlogByUser = async (req, res) => {
  try {
    const blog = await credentialServiceVar.getBlogByUser(req.body.email);
    if(blog == null){
      res.json({status: "Record doesn't exists" });
      return;
    }
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateCreds = async (req, res) => {
  try {
    const blog = await credentialServiceVar.updateCreds(req.body.email, req.body);
    if(blog == null){
      res.json({status: "Record doesn't exists" });
      return;
    }
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteCred = async (req, res) => {
  try {
    console.log(req.body.email);
    const blog = await credentialServiceVar.deleteCred(req.body.email);
    if(blog == null){
      res.json({status: "Record doesn't exists" });
      return;
    }
    res.json({ data: blog, status: "Deleted the above record" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};