import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotesPage from "./pages/Notes";
import Header from "./Header/Header";

const AppRoutes: React.FC = () => {
	return (
		<Router>
            <Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/notas" element={<NotesPage />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
