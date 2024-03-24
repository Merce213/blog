import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListDivider from "@mui/joy/ListDivider";
import { RowMenu } from "./RowMenu";

const ArticleList = ({ articles }) => {
	const formatDate = (dateString) => {
		const options = { month: "short", day: "numeric", year: "numeric" };
		const date = new Date(dateString);
		return date.toLocaleDateString("fr-FR", options);
	};

	return (
		<Box
			sx={{
				display: { xs: "block", sm: "none" },
				bgcolor: "white",
				p: 2,
				mt: 2,
				borderRadius: 15,
			}}
		>
			{articles.map((article) => (
				<List
					key={article._id}
					size="sm"
					sx={{
						"--ListItem-paddingX": 0,
					}}
				>
					<ListItem
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
						}}
					>
						<ListItemContent
							sx={{
								display: "flex",
								gap: 2,
								alignItems: "start",
							}}
						>
							<div>
								<Typography fontWeight={600} gutterBottom>
									{article.title}
								</Typography>

								<Typography
									level="body-sm"
									gutterBottom
									sx={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										lineClamp: 3,
										display: "-webkit-box",
										WebkitLineClamp: 3,
										WebkitBoxOrient: "vertical",
									}}
								>
									{article.content}
								</Typography>

								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 0.5,
										mb: 1,
									}}
								>
									<Typography level="body-xs">
										{formatDate(article.createdAt)}
									</Typography>
								</Box>

								<RowMenu id={article._id} />
							</div>
						</ListItemContent>
						<Chip
							variant="soft"
							size="sm"
							startDecorator={
								{
									Draft: "Brouillon",
									Published: "Publié",
								}[article.status]
							}
							color={
								{
									Draft: "neutral",
									Published: "success",
								}[article.status]
							}
						></Chip>
					</ListItem>
					<ListDivider />
				</List>
			))}
		</Box>
	);
};

export default ArticleList;
