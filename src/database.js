import mongoose from "mongoose";
import config from "./config.js";

(async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      // user: config.MONGO_USER,
      // pass: config.MONGO_PASSWORD
    };

    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`,
      mongooseOptions
    );
    console.log(`database is connected to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
})();
