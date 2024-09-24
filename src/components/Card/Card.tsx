import { Character } from "../../features/types";

interface CardProps {
  character: Character;
}

const Card = ({ character }: CardProps) => {
  return (
    <div className="flex flex-col items-center gap-1 mb-5 border border-black p-2 text-center flex-grow w-52 h-72">
      <img
        className="object-cover object-top w-full h-36 rounded-md"
        src={character.imageUrl}
        alt={character.fullName}
        width="100"
      />
      <div className="flex flex-col items-center">
        <h3 className="uppercase mt-4 font-bold">{character.fullName}</h3>
        <span className="character-title">{character.title}</span>
        <span className="character-family">{character.family}</span>
      </div>
    </div>
  );
};

export default Card;
