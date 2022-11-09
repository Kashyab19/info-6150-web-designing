const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
 
app.listen(3001, () => {
  console.log("Running a server in 3001");
});
 
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

const credRouter = require("./routes/Endpoints");
 
app.use("/api/credentials", credRouter);

module.exports = app;