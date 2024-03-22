import { Sheet, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
	const { id } = useParams();

	const [article, setArticle] = useState({});

	const getArticle = async (id) => {
		const response = await fetch(`http://localhost:8080/api/article/${id}`);
		const data = await response.json();
		setArticle(data);
	};

	useEffect(() => {
		getArticle(id);
	}, [id]);

	const dateAndTime = (iso) => {
		const date = new Date(iso);
		return date.toLocaleString("fr-FR");
	};

	const { title, content, createdAt } = article;
	return (
		<>
			<div
				className={`relative h-[50dvh] w-full bg-cover bg-center bg-no-repeat brightness-50 after:absolute after:bottom-0 after:left-0 after:block after:h-[150px] after:w-full after:bg-gradient-to-t after:from-slate-900 after:to-transparent after:content-['']`}
				style={{
					backgroundImage: `url( https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop )`,
				}}
			></div>

			<section className="relative mx-auto -mt-40 px-6 py-2 md:container">
				<Sheet
					color="primary"
					variant="soft"
					sx={{
						borderRadius: "md",
						p: 4,
					}}
				>
					<div className="flex flex-col gap-3">
						<Typography level="h1">{title}</Typography>
						<Typography level="body-md">{content}</Typography>
						<Typography level="body-sm" textColor="text.tertiary">
							{dateAndTime(createdAt)}
						</Typography>
					</div>
				</Sheet>
			</section>
		</>
	);
};

export default Article;
