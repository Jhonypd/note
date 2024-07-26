import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotesPage from "./pages/Notes";
import Header from "./Header/Header";
import { TasksProvider } from "../context/TasksContext";
import { SearchProvider } from "../context/SearchContext";
import { ToastContainer } from "react-toastify";
import SearchPage from "./pages/Search";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <TasksProvider>
        <SearchProvider>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notas" element={<NotesPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </SearchProvider>
      </TasksProvider>
    </Router>
  );
};

export default AppRoutes;
