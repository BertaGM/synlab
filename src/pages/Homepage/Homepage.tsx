import Button from "../../components/Button/Button"
import List from "../../components/List/List";
import useCharactersApi from "../../hooks/useCharactersApi";
import "./Homepage.css";

const Homepage = () => {
  const characters = useCharactersApi();

  return (
    <main>
      <h1 className="title">Game of Thrones Characters</h1>
      <List characters={characters} />
      <Button className="button" text="Previous" />
      <Button className="button" text="Next" />
    </main>
  );
};

export default Homepage;
