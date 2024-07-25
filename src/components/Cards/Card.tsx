import React, { useState } from "react";
import { useTasks } from "../../context/TasksContext";
import EditModal from "../EditModal/EditModal";

interface CardProps {
	id: string;
	title: string;
	text: string;
	type: string;
	createdAt: Date;
}

const Cards: React.FC<CardProps> = ({ id, title, text, type, createdAt }) => {
	const { deleteTask } = useTasks();
	const [showEditModal, setShowEditModal] = useState<boolean>(false);

	const handleDelete = () => {
		deleteTask(id);
	};

	const handleEdit = () => {
		setShowEditModal(true);
	};

	const closeModal = () => {
		setShowEditModal(false);
	};

	// Define a mapping of types to border colors
	const borderColorMap: { [key: string]: string } = {
		Pessoal: "border-green-400",
		Escolar: "border-blue-400",
		Business: "border-yellow-400",
		// Adicione mais tipos e cores conforme necessário
	};

	// Get the border color based on the type
	const borderColor = borderColorMap[type] || "border-gray-400"; // Default color if type not found

	return (
		<div
			className={`w-72 bg-white rounded-b-lg border-t-8 ${borderColor} px-4 py-5 flex flex-col justify-around shadow-md`}>
			<p className="text-lg font-bold font-sans">{title}</p>
			<div className="py-3">
				<p className="text-gray-400 text-sm">{text}</p>
			</div>
			<div className="flex justify-between">
				<svg
					className="w-6 h-6"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
						strokeLinejoin="round"
						strokeLinecap="round"></path>
				</svg>
				<div className="text-sm flex gap-2">
					<button
						onClick={handleEdit}
						className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
						Editar
					</button>
					<button
						onClick={handleDelete}
						className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
						Deletar
					</button>
				</div>
			</div>

			{showEditModal && (
				<EditModal
					id={id}
					title={title}
					text={text}
					type={type}
					createdAt={createdAt}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
};

export default Cards;