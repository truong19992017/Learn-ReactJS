import Header from "./components/Layout/Header";
import Main from "./components/Main/Main";
import Data from "./Data"
import BackToTop from "./components/Layout/BackToTop";

function App() {

  function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
      <Data>
        <Header/>
        <Main/>
        <BackToTop/>
      </Data>
    </div>
  );
}

export default App;