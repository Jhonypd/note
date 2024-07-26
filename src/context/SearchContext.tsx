import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearchTerm: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    console.log("Search term changed:", searchTerm);
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, clearSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
