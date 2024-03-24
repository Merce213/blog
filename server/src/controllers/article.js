import Article from "../models/articleModel.js";
import mongoose from "mongoose";

export const createArticle = async (req, res) => {
	const article = req.body;

	if (!Article.schema.path("status").enumValues.includes(article.status)) {
		return res.status(400).json({
			message: `Invalid status value only "Draft" or "Published" are available`,
		});
	}

	const newArticle = new Article(article);

	try {
		await newArticle.save();
		res.status(201).json(newArticle);
	} catch (error) {
		if (error.errors) {
			const errors = {};

			Object.keys(error.errors).forEach((key) => {
				errors[key] = error.errors[key].message;
			});
			res.status(400).json({ errors });
		} else {
			console.error(error);
			res.status(500).json({ message: "Internal server error" });
		}
	}
};

export const getArticles = async (req, res) => {
	try {
		const articles = await Article.find();
		res.status(200).json(articles);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getArticleById = async (req, res) => {
	const { id } = req.params;

	try {
		const article = await Article.findById(id);
		res.status(200).json(article);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const updateArticle = async (req, res) => {
	const { id } = req.params;
	const { title, content, image, status } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ message: `No article with id: ${id}` });

	if (!Article.schema.path("status").enumValues.includes(status)) {
		return res.status(400).json({
			message: `Invalid status value only "Draft" or "Published" are available`,
		});
	}

	const updatedArticle = { title, content, image, status, _id: id };

	await Article.findByIdAndUpdate(id, updatedArticle, { new: true });

	res.status(200).json(updatedArticle);
};

export const deleteArticle = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ message: `No article with id: ${id}` });

	await Article.findByIdAndDelete(id);

	res.status(200).json({ message: "Article deleted successfully." });
};
