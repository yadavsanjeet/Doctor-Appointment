const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
 
  try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Mongo Successfully!");
        console.log(`Connected to host: ${mongoose.connection.host}`.bgGreen.white);
        console.log(`Connected to database: ${mongoose.connection.db.doctor-appointment}`);
      }
  catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};

module.exports = connectDB;



