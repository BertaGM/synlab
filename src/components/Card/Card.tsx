import { Character } from "../../features/types";
import "./Card.css";

interface CardProps {
  character: Character;
}

const Card = ({ character }: CardProps) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={character.imageUrl}
        alt={character.fullName}
        width="100"
      />
      <div className="character-text">
        <h3 className="character-name">{character.fullName}</h3>
        <span className="character-title">{character.title}</span>
        <span className="character-family">{character.family}</span>
      </div>
    </div>
  );
};

export default Card;
