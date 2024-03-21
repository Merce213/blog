import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["Draft", "Published"],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
