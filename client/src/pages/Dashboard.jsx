import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import ArticleTable from "../components/ArticleTable";
import SideBar from "../components/SideBar";
import AddArticleHeader from "../components/AddArticleHeader";

const Dashboard = () => {
	const [articlesData, setArticlesData] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const response = await fetch("http://localhost:8080/api/article");
			const data = await response.json();
			setArticlesData(data);
		};

		getArticles();
	}, []);

	return (
		<section className="min-h-dvh">
			<div className="lg:flex">
				<SideBar />

				<div className="h-dvh min-w-0 flex-1 px-6">
					<AddArticleHeader />
					<ArticleList articles={articlesData} />
					<ArticleTable articles={articlesData} />
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
