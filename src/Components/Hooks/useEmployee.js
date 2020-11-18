import { useEffect, useState } from "react";

export const useEmployee = () => {
  const [employee, setEmployee] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setEmployee(results[0]);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
    };
    getContacts();
  }, []);
  return { employee, isError };
};
