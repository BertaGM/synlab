import { Character } from "../../features/types";
import Card from "../Card/Card";
import "./List.css";

interface ListProps {
  characters: Character[];
}

const List = ({ characters }: ListProps) => {
  return (
    <ul className="cards">
      {characters.map((character) => (
        <li className="cards__list" key={character.id}>
          <Card character={character} />
        </li>
      ))}
    </ul>
  );
};

export default List;
