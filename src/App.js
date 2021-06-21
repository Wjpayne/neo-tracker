import { useState } from "react";
import { NasaAPI } from "./API/NasaAPI";
import { NavBar } from "./Components/NavBar";
import DarkModeContext from "./utils/DarkModeContext/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style = {{backgroundColor: "black"}}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <NavBar />
        <NasaAPI />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
