import "./App.css";
import Header from "./components/header/Header";
import Tabs from "./components/tabs/Tabs";

function App() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Header/>
        <Tabs />
      </div>
    </>
  );
}

export default App;
