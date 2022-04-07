import { Routes, Route, BrowserRouter  } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SelectAlbum from "./SelectAlbum";
import RecentAlbum from "./RecentAlbum";
import FindNumber from "./FindNumber";

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/selectAlbum" element={<SelectAlbum/>} />
        <Route path="/recentAlbum" element={<RecentAlbum/>} />
        <Route path="/findNumber" element={<FindNumber/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
