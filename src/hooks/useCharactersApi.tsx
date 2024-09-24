import { useEffect, useState } from "react";
import { Character } from "../features/types";
import axios from "axios";

const useCharactersApi = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const getCharactersApi = async () => {
    try {
      const response = await axios.get<Character[]>(
        import.meta.env.VITE_API_URL,
      );
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersApi();
  }, []);

  return { characters, loading };
};

export default useCharactersApi;
