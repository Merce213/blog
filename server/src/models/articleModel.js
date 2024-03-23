import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Le titre est requis"],
		},
		content: {
			type: String,
			required: [true, "Le contenu est requis"],
		},
		image: {
			type: String,
			required: [true, "L'image est requise"],
		},
		status: {
			type: String,
			enum: ["Draft", "Published"],
			required: [true, "Le statut est requis"],
		},
	},
	{
		timestamps: true,
	}
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
