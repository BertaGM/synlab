import { Character } from "../../features/types";
import Card from "../Card/Card";

interface ListProps {
  characters: Character[];
}

const List = ({ characters }: ListProps) => {
  return (
    <ul className="grid gap-11 justify-center justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {characters.map((character) => (
        <li className="cards__list" key={character.id}>
          <Card character={character} />
        </li>
      ))}
    </ul>
  );
};

export default List;
