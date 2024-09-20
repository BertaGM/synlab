import { Character } from "../../features/types";
import "./Card.css";

interface CardProps {
  character: Character;
}

const Card = ({ character }: CardProps) => {
  return (
    <div className="card">
      <img src={character.imageUrl} alt={character.fullName} width="100" />
      <h3>{character.fullName}</h3>
      <span>{character.title}</span>
      <span>{character.family}</span>
    </div>
  )
}

export default Card;
