import axios from "axios";

export async function getPokemons(initialId: number, finalId: number) {
  const endPoints = [];
  for (let i = initialId; i <= finalId; i++) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }
  const response = await axios.all(
    endPoints.map((endPoints) => axios.get(endPoints))
  );
  return response;
};
