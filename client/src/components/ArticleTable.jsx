import { Chip, Sheet, Table, Typography } from "@mui/joy";
import { RowMenu } from "./RowMenu";

const ArticleTable = ({ articles }) => {
	const formatDate = (dateString) => {
		const options = { month: "short", day: "numeric", year: "numeric" };
		const date = new Date(dateString);
		return date.toLocaleDateString("fr-FR", options);
	};

	return (
		<>
			<Sheet
				variant="outlined"
				sx={{
					display: { xs: "none", sm: "block" },
					width: "100%",
					borderRadius: "sm",
					flexShrink: 1,
					overflow: "auto",
					minHeight: 0,
					mt: 2,
				}}
			>
				<Table
					aria-labelledby="tableTitle"
					stickyHeader
					hoverRow
					sx={{
						"--TableCell-headBackground":
							"var(--joy-palette-background-level1)",
						"--Table-headerUnderlineThickness": "1px",
						"--TableRow-hoverBackground":
							"var(--joy-palette-background-level1)",
						"--TableCell-paddingY": "4px",
						"--TableCell-paddingX": "8px",
					}}
				>
					<thead>
						<tr>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Titre
							</th>
							<th style={{ width: 240, padding: "12px 8px" }}>
								Contenu
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Statut
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Date
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								{" "}
							</th>
						</tr>
					</thead>
					<tbody>
						{articles.map((article) => (
							<tr key={article._id}>
								<td>
									<Typography level="body-xs">
										{article.title}
									</Typography>
								</td>
								<td>
									<Typography
										level="body-xs"
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
								</td>
								<td>
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
								</td>
								<td>
									<Typography level="body-xs">
										{formatDate(article.createdAt)}
									</Typography>
								</td>
								<td>
									<RowMenu id={article._id} />
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Sheet>
		</>
	);
};

export default ArticleTable;
