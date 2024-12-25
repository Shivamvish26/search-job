import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIssearched] = useState(false);

  const [jobs, setJobs] = useState([]);

  // function to fetch jobds
  const fetchJobs = async () => {
    setJobs(jobsData)
  };

  useEffect(() => fetchJobs(), []);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIssearched,
    jobs,
    setJobs,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
