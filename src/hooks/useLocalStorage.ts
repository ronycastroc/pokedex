import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export function useLocalStorage(key: string, initialValue: any) {
  const dispatch = useDispatch();

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = JSON.stringify(storedValue);
      localStorage.setItem(key, item);
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      dispatch({ type: "ADD_FAVORITE_POKEMONS", payload: JSON.parse(item) });
    }
  }, [dispatch, key]);

  return [storedValue, setStoredValue];
};
