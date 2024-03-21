import express from "express";
import {
	getArticles,
	getArticleById,
	createArticle,
	updateArticle,
	deleteArticle,
} from "../controllers/article.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.get("/:id", getArticleById);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
