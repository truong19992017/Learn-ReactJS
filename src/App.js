import Header from "./components/Layout/Header";
import Main from "./components/Main/Main";

function App() {

  function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
      <Header/>
      <Main/>

      <div className="back--to--top">
        <i className="fas fa-arrow-up" />
      </div>
    </div>
  );
}

export default App;
