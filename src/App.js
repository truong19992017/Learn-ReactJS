import Header from "./components/Layout/Header";
import Main from "./components/Main/Main";
import Data from "./Data"
import BackToTop from "./components/Layout/BackToTop";
import { Routes, Route } from "react-router-dom";
import Info from "./components/Info";

function App() {

  function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
      <Data>
          <Header/>
          
          <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/info" element={<Info/>}/>
          </Routes>
    
          <BackToTop/>
      </Data>
    </div>
  );
}

export default App;