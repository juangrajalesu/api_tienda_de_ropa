import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DB: process.env.MONGO_DB || "clothesDB",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "root",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || 4000,
};
