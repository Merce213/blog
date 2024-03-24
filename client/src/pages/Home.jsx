import { useEffect, useState } from "react";
import OverflowCard from "../components/Card";

const Home = () => {
	const [articles, setArticles] = useState([]);

	const getArticles = async () => {
		const response = await fetch("http://localhost:8080/api/article");
		const data = await response.json();
		setArticles(data);
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<main>
			<section className="mx-auto px-6 py-2 md:container">
				<h1 className="mb-5 text-3xl font-bold">
					Découvrez mes articles
				</h1>

				<div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
					{articles
						.filter((article) => article.status === "Published")
						.map((article) => (
							<OverflowCard key={article._id} article={article} />
						))}
				</div>
			</section>
		</main>
	);
};

export default Home;
