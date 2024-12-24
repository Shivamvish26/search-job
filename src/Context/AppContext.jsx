import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIssearched] = useState(false);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIssearched,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
