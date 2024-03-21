import mongoose from "mongoose";

const connectDB = (url) => {
	mongoose
		.connect(url)
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));
};

export default connectDB;
