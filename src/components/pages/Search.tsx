import { useEffect } from "react";
import { useSearch } from "../../context/SearchContext";
import { useTasks } from "../../context/TasksContext";
import Cards, { TaskType } from "../Cards/Card";
import Search from "../Search";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const { tasks } = useTasks();
  const { searchTerm, setSearchTerm } = useSearch();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query") || "";
    setSearchTerm(query);
  }, [location.search, setSearchTerm]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 px-4 flex flex-col items-center min-h-screen">
      <div className="max-w-4xl w-full">
        <Search />
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Resultado para: {searchTerm}</h2>
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">Nenhuma nota encontrada.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map((task) => (
              <Cards
                key={task.id}
                id={task.id}
                title={task.type}
                text={task.text}
                type={task.type as TaskType}
                createdAt={task.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
