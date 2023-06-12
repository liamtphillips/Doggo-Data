import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Search"
import SingleDog from "./pages/SingleDog"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Subscribe from "./components/Subscribe"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/:name" element={<SingleDog />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}


export default App;