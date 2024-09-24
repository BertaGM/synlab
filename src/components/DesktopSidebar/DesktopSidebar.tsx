import NavBar from "../NavBar/NavBar";

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#979a99] fixed text-white top-0 left-0 h-full w-64 pl-5 transition-transform duration-300 ease-in-out">
      <NavBar />
    </div>
  );
};

export default Sidebar;
