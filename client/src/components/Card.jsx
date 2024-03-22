import { Button } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

const OverflowCard = ({ article: { _id, title, content, createdAt } }) => {
	const dateAndTime = (iso) => {
		const date = new Date(iso);
		return date.toLocaleString("fr-FR");
	};

	return (
		<Card variant="plain">
			<CardOverflow>
				<AspectRatio ratio="2">
					<img
						src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
						srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
						loading="lazy"
						alt=""
					/>
				</AspectRatio>
			</CardOverflow>
			<CardContent>
				<Typography level="title-md">{title}</Typography>
				<Typography
					level="body-sm"
					sx={{
						overflow: "hidden",
						textOverflow: "ellipsis",
						lineClamp: 3,
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
					}}
				>
					{content}
				</Typography>
			</CardContent>
			<CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
				<Divider inset="context" />
				<CardContent
					orientation="horizontal"
					sx={{
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography
						level="body-xs"
						fontWeight="md"
						textColor="text.tertiary"
					>
						{dateAndTime(createdAt)}
					</Typography>
					<Button variant="solid">
						<Link to={`/article/${_id}`}>Consulter</Link>
					</Button>
				</CardContent>
			</CardOverflow>
		</Card>
	);
};

export default OverflowCard;
