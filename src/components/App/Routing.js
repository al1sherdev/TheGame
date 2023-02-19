import {
        BrowserRouter, 
        Route, 
        Routes,
      } from "react-router-dom";
import Populor from "../../pages/Populor";
import SinglePage from "../../pages/SinglePage";
import '../../styles/main.scss';
import Home from "../../pages/Home";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Genres from "../../pages/Genres";
import Platforms from "../../pages/Platforms";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        <Navbar />
        <Sidebar />
          <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/populor" element={ <Populor /> } />
              <Route path="/genres" element={ <Genres /> } />
              <Route path="/platforms" element={ <Platforms /> } />
              <Route path="/single-page:id" element={ <SinglePage /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
