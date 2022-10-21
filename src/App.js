import React from "react";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
    const text = {tittle: "hello" , subtitle: "lorem lorem lorem "}
    return (
        <div className="App">
            <AboutUs info={text}/>
        </div>
      );
}

export default App;
