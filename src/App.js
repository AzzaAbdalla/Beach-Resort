import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/rooms/:slug/" element={<SingleRoom />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
