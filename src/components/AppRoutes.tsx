import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotesPage from "./pages/Notes";
import Header from "./Header/Header";
import { TasksProvider } from "../context/TasksContext";
import { SearchProvider } from "../context/SearchContext";

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<TasksProvider>
				<SearchProvider>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/notas" element={<NotesPage />} />
					</Routes>
				</SearchProvider>
			</TasksProvider>
		</Router>
	);
};

export default AppRoutes;
