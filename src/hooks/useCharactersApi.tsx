import { useEffect, useState } from "react";
import { Character } from "../features/types";
import axios from "axios";


const useCharactersApi = () => {
  const [ characters, setCharacters ] = useState<Character[]>([]);
  
  const getCharactersApi = async () => {
  
    const response = await axios.get<Character[]>(import.meta.env.VITE_API_URL);
      setCharacters(response.data);
  }

  useEffect(() => {
    getCharactersApi();
  }, []);

  return characters;
  
};

export default useCharactersApi;
