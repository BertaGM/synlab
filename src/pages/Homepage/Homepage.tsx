import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useCharactersApi from "../../hooks/useCharactersApi";
import List from "../../components/List/List";
import Sidebar from "../../components/DesktopSidebar/DesktopSidebar";
import MobileNavBar from "../../components/MobileNavBar/MobileNavBar";
import Button from "../../components/Button/Button";
import "./Homepage.css";
import Loading from "../../components/Loading/Loading";

const Homepage = () => {
  const { characters, loading } = useCharactersApi();
  const [isDesktopWidth, setIsDesktopWidth] = useState(false);
  const [canSidebarBeShown, setCanSidebarBeShown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const isDesktopWidth = () => {
      if (window.innerWidth > 686) {
        setIsDesktopWidth(true);
      } else {
        setIsDesktopWidth(false);
      }
    };

    window.addEventListener("resize", isDesktopWidth);
  }, []);

  useEffect(() => {
    const viewportSize = window.innerWidth;
    if (viewportSize > 686) {
      setIsDesktopWidth(true);
      setCanSidebarBeShown(true);
    } else {
      setIsDesktopWidth(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      {!isDesktopWidth && <MobileNavBar />}
      {canSidebarBeShown && isSidebarOpen && <Sidebar />}
      <div className="header">
        {isDesktopWidth && (
          <Button
            className="toggle-button"
            icon={isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            onClick={toggleSidebar}
          />
        )}
      </div>
      <h1 className="title">Game of Thrones Characters</h1>
      <List characters={characters} />
      <Button className="button" text="Previous" />
      <Button className="button" text="Next" />
    </main>
  );
};

export default Homepage;
