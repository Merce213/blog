import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.config.js";

import articleRoutes from "./src/routes/articleRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// API Routes
app.use("/api/article", articleRoutes);

app.get("/", async (req, res) => {
	res.status(200).json({
		message: "Hello from BLOG API!",
	});
});

// Start Server
const port = 8080;
const startServer = () => {
	try {
		connectDB(process.env.MONGODB_URL);
		app.listen(port, () =>
			console.log(`Server running on port http://localhost:${port}`)
		);
	} catch (err) {
		console.log(err);
	}
};
startServer();
