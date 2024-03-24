import { Box, Button, Modal, ModalDialog, Typography } from "@mui/joy";
import CreateArticle from "./CreateArticle";
import { useState } from "react";

const AddArticleHeader = () => {
	const [open, setOpen] = useState(false);

	return (
		<Box bgcolor={"white"} p={2} borderRadius="sm" mt={2}>
			<div className="flex justify-between">
				<Typography
					variant="soft"
					sx={{
						fontWeight: 600,
					}}
				>
					Liste des articles
				</Typography>

				<Button
					variant="soft"
					color="primary"
					startDecorator={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14" />
							<path d="M12 5v14" />
						</svg>
					}
					onClick={() => setOpen(true)}
				>
					Ajouter un article
				</Button>

				<Modal open={open} onClose={() => setOpen(false)}>
					<ModalDialog>
						<CreateArticle setOpenModal={setOpen} />
					</ModalDialog>
				</Modal>
			</div>
		</Box>
	);
};

export default AddArticleHeader;
