import React, { useState } from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { useTasks } from "../../context/TasksContext";

const CreateNotes: React.FC = () => {
  const { addTask } = useTasks();
  const [type, setType] = useState<string>("");
  const [text, setText] = useState<string>("");

  const types = [
    { value: "Pessoal", label: "Pessoal" },
    { value: "Escolar", label: "Escolar" },
    { value: "Business", label: "Business" },
  ];

  const handleSave = () => {
    if (type && text) {
      addTask(type, text);
      setType("");
      setText("");
    }
  };

  return (
    <div className="w-80 h-auto min-h-16 mx-auto bg-gray-100 rounded-xl shadow-2xl px-2">
      <div className="flex items-center p-2">
        <div className="p-1">
          <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
        </div>
        <div className="p-1">
          <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer p"></span>
        </div>
        <div className="p-1">
          <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
        </div>
      </div>
      <label htmlFor="note" className="sr-only">
        Texto da Nota
      </label>
      <textarea
        className="w-full text-sm max-h-52 min-h-32 focus-visible:border-b-neutral-500 p-2 outline-none rounded-xl"
        name="Criar notas"
        id="note"
        cols={10}
        rows={5}
        maxLength={300}
        placeholder="Fazer compras"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="py-2 justify-between w-full flex">
        <div
          className={`flex items-center relative group rounded-lg w-fit bg-gray-800 overflow-hidden px-1 text-sm`}
        >
          <Select
            id="tipo"
            options={types}
            value={type}
            onChange={(e) => setType(e.target.value)}
            defaultValue="Selecione um tipo"
            label="Tipo"
          />
        </div>
        <Button
          size="icon"
          variant="success"
          className="font-bold text-slate-950"
          aria-label="Salvar nota"
          onClick={handleSave}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default CreateNotes;
