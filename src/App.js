import { NasaAPI } from "./API/NasaAPI";
import "./App.css";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <NasaAPI />
    </>
  );
}

export default App;
