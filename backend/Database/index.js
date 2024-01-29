const mongoose = require("mongoose");


const connectDB = async () => {
    try {
      const ConnectionInstance = await mongoose.connect('mongodb://localhost:27017/paytm')
      console.log(`\n MongoDB Connected! DB Host: ${ConnectionInstance.connection.host}`);
    } catch (error) {
      console.log("MongoDB connection error ", error);
      process.exit(1);
    }
}

module.exports = {
    connectDB
}