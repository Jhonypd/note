import React, { useState } from "react";
import { useTasks } from "../../context/TasksContext";
import EditModal from "../EditModal/EditModal";
import Button from "../Button/Button";
import { MdOutlinePersonPin, MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

export type TaskType = "Pessoal" | "Escolar" | "Business";

const TASK_TYPES: Record<TaskType, string> = {
  Pessoal: "border-green-400",
  Escolar: "border-blue-400",
  Business: "border-yellow-400",
};

const TASK_ICONS: Record<TaskType, JSX.Element> = {
  Pessoal: <MdOutlinePersonPin />,
  Escolar: <MdOutlineSchool />,
  Business: <MdOutlineBusinessCenter />,
};

interface CardProps {
  id: string;
  title: string;
  text: string;
  type: TaskType;
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

  const borderColor = TASK_TYPES[type] || "border-gray-400";
  const typeIcon = TASK_ICONS[type] || null;

  return (
    <div
      className={`w-72 min-h-60 bg-white rounded-b-lg border-t-8 ${borderColor} px-3 py-2 flex flex-col justify-between shadow-md mx-auto`}
    >
      <p className="text-lg font-bold font-sans m-0">{title}</p>
      <div className="py-2 ">
        <p className="text-gray-400 text-sm break-words w-full ">{text}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          {typeIcon}
          <span className="text-gray-500 text-sm">{id}</span>
        </div>
        <div className="text-sm flex gap-2 py-2">
          <Button
            variant="warning"
            size="icon"
            onClick={handleEdit}
            className="px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out"
            aria-label={`Editar tarefa ${id}`}
          >
            Editar
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={handleDelete}
            className="px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out"
            aria-label={`Deletar tarefa ${id}`}
          >
            Deletar
          </Button>
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
