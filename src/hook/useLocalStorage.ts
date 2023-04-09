import { RootState } from "@store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLocalStorage = (key = "redux"): void => {
  const dispatch = useDispatch();
  const { favoritePokemons } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      const data = JSON.parse(storedData);

      dispatch({
        type: "pokemon/favoritePokemons",
        payload: data.favoritePokemons,
      });
    }
  }, [dispatch, key]);

  useEffect(() => {
    const data = { favoritePokemons };

    localStorage.setItem(key, JSON.stringify(data));
  }, [favoritePokemons, key]);
};
