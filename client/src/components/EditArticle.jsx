import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import { useState, useEffect } from "react";

const EditArticle = ({ id, setOpenModal }) => {
	const [articleData, setArticleData] = useState({
		title: "",
		content: "",
		image: "",
		status: "Draft",
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		const fetchArticle = async () => {
			const response = await fetch(
				`http://localhost:8080/api/article/${id}`
			);

			const data = await response.json();

			setArticleData(data);
		};

		fetchArticle();
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setArticleData({
			...articleData,
			[name]: value,
		});

		if (errors[name]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const handleSelectChange = (event, newValue) => {
		setArticleData({
			...articleData,
			status: newValue,
		});
	};

	const convertImageToBase64 = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (readerEvent) => {
				const content = readerEvent.target.result;
				setArticleData({
					...articleData,
					image: content,
				});
				setErrors({
					...errors,
					image: "",
				});
			};

			reader.onerror = (error) => {
				setErrors({
					...errors,
					image: `Erreur lors de la lecture du fichier: ${error}`,
				});
			};

			if (file.type.startsWith("image/")) {
				reader.readAsDataURL(file);
			} else {
				setErrors({
					...errors,
					image: "Le fichier doit être une image",
				});
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(
			`http://localhost:8080/api/article/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(articleData),
			}
		);

		const data = await response.json();

		if (!response.ok) {
			setErrors(data.errors);

			return;
		}

		setErrors([]);

		setOpenModal(false);

		window.location.reload();
	};

	return (
		<Sheet
			sx={{
				width: {
					xs: "98%",
					sm: "300px",
					md: "400px",
					lg: "500px",
					xl: "600px",
				},
				mx: "auto",
				display: "flex",
				flexDirection: "column",
				gap: 2,
				borderRadius: "sm",
			}}
		>
			<div>
				<Typography level="h4" component="h1">
					{`Modifier l'article intitulé: ${articleData.title}`}
				</Typography>
			</div>
			<form onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="flex flex-col gap-3">
					<FormControl>
						<FormLabel>Titre</FormLabel>
						<Input
							name="title"
							value={articleData.title}
							type="text"
							placeholder="Titre de l'article"
							onChange={handleChange}
						/>
						<FormHelperText
							sx={{
								color: "red",
							}}
						>
							{errors && errors.title && (
								<span>{errors.title}</span>
							)}
						</FormHelperText>
					</FormControl>
					<FormControl>
						<FormLabel>Contenu</FormLabel>
						<Textarea
							placeholder="Contenu de l'article"
							name="content"
							value={articleData.content}
							maxRows={10}
							minRows={3}
							onChange={handleChange}
						/>
						<FormHelperText
							sx={{
								color: "red",
							}}
						>
							{errors && errors.content && (
								<span>{errors.content}</span>
							)}
						</FormHelperText>
					</FormControl>
					<div>
						<label
							htmlFor="img"
							className="mb-1 block text-sm font-medium text-gray-700"
						>
							Upload file
						</label>
						<input
							id="img"
							type="file"
							name="image"
							accept="image/*"
							onChange={convertImageToBase64}
							className="block w-full text-sm file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-500 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white file:transition-colors file:duration-200 file:ease-in-out hover:file:bg-blue-700/80 focus:outline-none focus:file:ring-2 focus:file:ring-blue-500 focus:file:ring-offset-2"
						/>
						<FormHelperText
							sx={{
								color: "red",
							}}
						>
							{errors && errors.image && (
								<span>{errors.image}</span>
							)}
						</FormHelperText>
					</div>

					{articleData.image && (
						<AspectRatio ratio="2">
							<img
								src={articleData.image}
								loading="lazy"
								alt=""
							/>
						</AspectRatio>
					)}

					<FormControl
						sx={{
							width: "50%",
						}}
					>
						<FormLabel>Statut</FormLabel>
						<Select
							name="status"
							value={articleData.status}
							defaultValue={articleData.status}
							onChange={handleSelectChange}
						>
							<Option value="Draft">Brouillon</Option>
							<Option value="Published">Publié</Option>
						</Select>
					</FormControl>
					<Button
						type="submit"
						sx={{
							mt: 1,
						}}
					>
						Modifier
					</Button>
				</div>
			</form>
		</Sheet>
	);
};

export default EditArticle;
