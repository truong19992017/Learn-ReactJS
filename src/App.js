import Header from "./components/Layout/Header";
import Main from "./components/Main/Main";
import Data from "./Data"
import BackToTop from "./components/Layout/BackToTop";
import { Routes, Route } from "react-router-dom";
import MainInfo from './components/Main/MainInfo/MainInfo';
import Friends from "./components/Main/Friends/Friends";

function App() {
  return (
    <div className="App">
      <Data>
          <Header/>
          
          <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/info" element={<MainInfo/>}/>
          <Route path="/friends" element={<Friends/>}/>
          </Routes>
    
          <BackToTop/>
      </Data>
    </div>
  );
}

export default App;