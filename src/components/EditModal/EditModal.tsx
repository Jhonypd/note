import React, { useState } from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { useTasks } from "../../context/TasksContext";

interface EditModalProps {
	id: string;
	title: string;
	text: string;
	type: string;
	createdAt: Date;
	closeModal: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
	id,
	title,
	text,
	type,
	createdAt,
	closeModal,
}) => {
	const { editTask } = useTasks();
	const [newType, setNewType] = useState<string>(type);
	const [newText, setNewText] = useState<string>(text);

	const types = [
		{ value: "Pessoal", label: "Pessoal" },
		{ value: "Escolar", label: "Escolar" },
		{ value: "Business", label: "Business" },
	];

	const handleSave = () => {
		editTask(id, { type: newType, text: newText });
		closeModal();
	};

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
			<div className="w-80 h-auto min-h-16 mx-auto bg-gray-100 rounded-xl shadow-2xl px-2">
				<div className="flex justify-between items-center">
					<div className="flex items-center p-1">
						<div className="px-1">
							<span
								className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"
								aria-label="Red color option"></span>
						</div>
						<div className="px-1">
							<span
								className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"
								aria-label="Yellow color option"></span>
						</div>
						<div className="px-1">
							<span
								className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"
								aria-label="Green color option"></span>
						</div>
					</div>
					<h3 className="text-lg font-bold">Editar Nota</h3>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-lg">
					<label htmlFor="note" className="sr-only">
						Texto da Nota
					</label>
					<textarea
						className="w-full text-sm max-h-52 min-h-32 focus-visible:border-b-neutral-500 p-2 outline-none rounded-xl"
						id="note"
						cols={10}
						rows={5}
						maxLength={300}
						value={newText}
						onChange={(e) => setNewText(e.target.value)}></textarea>
					<div className="py-2 justify-between w-full flex">
						<div
							className={`flex items-center relative group rounded-lg w-fit bg-gray-800 overflow-hidden px-1 text-sm`}>
							<Select
								id="tipo"
								options={types}
								value={newType}
								onChange={(e) => setNewType(e.target.value)}
								label="Tipo"
							/>
						</div>
						<div className="flex justify-end gap-2">
							<Button
								size="icon"
								variant="success"
								className="font-bold text-slate-950"
								aria-label="Salvar"
								onClick={handleSave}>
								Salvar
							</Button>
							<Button
								size="icon"
								variant="destructive"
								className="font-bold text-slate-950"
								aria-label="Cancelar"
								onClick={closeModal}>
								Cancelar
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
