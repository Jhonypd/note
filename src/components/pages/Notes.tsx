import React from 'react';
import Cards from '../Cards/Card';
import Search from '../Search';
import { useTasks } from '../../context/TasksContext';
import { useSearch } from '../../context/SearchContext';

const NotesPage: React.FC = () => {
  const { tasks } = useTasks();
  const { searchTerm } = useSearch();

  const filteredTasks = tasks.filter(task =>
    task.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 px-4 flex flex-col items-center min-h-screen">
      <div className="max-w-4xl w-full">
        <Search />
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Anotações</h2>
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">Nenhuma nota encontrada.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map(task => (
              <Cards
                key={task.id}
                id={task.id}
                title={task.type}
                text={task.text}
                type={task.type}
                createdAt={task.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesPage;
