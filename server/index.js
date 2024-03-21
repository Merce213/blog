import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// API Routes

app.get("/", async (req, res) => {
	res.status(200).json({
		message: "Hello from BLOG API!",
	});
});

// Start Server
const port = 8080;
const startServer = async () => {
	try {
		app.listen(port, () =>
			console.log(`Server running on port http://localhost:${port}`)
		);
	} catch (err) {
		console.log(err);
	}
};
startServer();
