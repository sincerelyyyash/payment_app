const express = require("express");
const mainRouter = require('./Routes/index.js');
const cors = require("cors");
const userRouter = require("./Routes/user.js")
const accountRouter = require("./Routes/accounts.js");
const { connectDB } = require("./Database/index.js");

const port = 3000;


const app = express();
app.use(cors());
app.use(express.json());





app.use('/api/v1', mainRouter)
app.use('/api/v1/user', userRouter);
app.use("/api/v1/account", accountRouter)



connectDB()
  .then(() => {
    app.listen(port, ()=>{
        console.log(`Payment App listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  })