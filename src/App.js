import React from "react";
import "./App.css";
import NasaApodo from "./Component/NasaApod";
function App() {
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
        <NasaApodo/>
      </p>
    </div>
  );
}

export default App;
