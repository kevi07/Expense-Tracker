import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;


    if (!db) {
        throw new Error("MongoDB URI is missing. Check your .env file.");
    }

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}