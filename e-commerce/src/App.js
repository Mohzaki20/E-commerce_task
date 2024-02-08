import Header from "./components/Header/Header";
import TopBar from "./components/Header/TopBar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Content />
    </div>
  );
}

export default App;