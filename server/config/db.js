const mongoose = require("mongoose");

const connectDB = async () =>{
try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
  console.log("mongoDb connected successfully")
} catch (error) {
  console.error("mongoDb connection failed: ", error.message);
  process.exit(1)
}
}
module.exports = connectDB;