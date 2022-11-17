const express = require("express");
const mongoose = require("mongoose");
const app = express();
const credRouter = require("./routes/Endpoints");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
 
app.listen(3001, () => {
  console.log("Running a server in 3001");
});

 
app.use("/api/users", credRouter);
 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);



module.exports = app;