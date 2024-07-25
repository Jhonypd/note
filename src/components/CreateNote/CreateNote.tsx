import Button from "../Button/Button";
import Select from "../Select/Select";

const CreateNotes = () => {
	const types = [
		{ value: "Pessoal", label: "Pessoal" },
		{ value: "Escolar", label: "Escolar" },
		{ value: "Business", label: "Business" },
	];
	return (
		<div className="w-80 h-auto min-h-16 mx-auto bg-gray-100 rounded-xl shadow-2xl px-2">
			<div className="flex items-center p-2">
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
			<label htmlFor="note" className="sr-only">
				Nota
			</label>
			<textarea
				className="w-full text-sm max-h-52 min-h-32 focus-visible:border-b-neutral-500 p-2 outline-none rounded-xl"
				name="Criar notas"
				id="note"
				aria-labelledby="note"
				cols={10}
				rows={5}
				maxLength={300}
				placeholder="Fazer compras"></textarea>
			<div className="py-2 justify-between w-full flex">
				<div
					className={`flex items-center relative group rounded-lg w-fit bg-gray-800 overflow-hidden px-1 text-sm`}>
					<Select
						id="tipo"
						options={types}
						defaultValue="Selecione um tipo"
						label="Tipo"
					/>
				</div>
				<Button
					size="icon"
					variant="success"
					className="font-bold text-slate-950"
					aria-label="Salva nota">
					Salvar
				</Button>
			</div>
		</div>
	);
};

export default CreateNotes;
