import { Navigate, Route, Routes } from "react-router-dom"
import Homepage from "../../pages/Homepage/Homepage"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App
