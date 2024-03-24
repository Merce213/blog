import {
	Divider,
	Dropdown,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	Modal,
	ModalDialog,
} from "@mui/joy";
import { useState } from "react";
import EditArticle from "./EditArticle";
import ModalDeleteArticle from "./ModalDeleteArticle";

export const RowMenu = ({ id }) => {
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);

	return (
		<>
			<Dropdown>
				<MenuButton
					slots={{ root: IconButton }}
					slotProps={{
						root: {
							variant: "plain",
							color: "neutral",
							size: "sm",
						},
					}}
				>
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
						<circle cx={12} cy={12} r={1} />
						<circle cx={19} cy={12} r={1} />
						<circle cx={5} cy={12} r={1} />
					</svg>
				</MenuButton>
				<Menu size="sm" sx={{ minWidth: 140 }}>
					<MenuItem onClick={() => setOpenModalEdit(true)}>
						Modifier
					</MenuItem>
					<Divider />
					<MenuItem
						color="danger"
						onClick={() => setOpenModalDelete(true)}
					>
						Supprimer
					</MenuItem>
				</Menu>
			</Dropdown>

			{/* Edit Modal */}
			<Modal open={openModalEdit} onClose={() => setOpenModalEdit(false)}>
				<ModalDialog>
					<EditArticle setOpenModal={setOpenModalEdit} id={id} />
				</ModalDialog>
			</Modal>

			{/* Delete Modal */}
			<ModalDeleteArticle
				open={openModalDelete}
				setOpen={setOpenModalDelete}
				id={id}
			/>
		</>
	);
};
