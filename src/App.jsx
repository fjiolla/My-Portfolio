import React from "react";
import NavBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"; 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Home/> 
      </main>
    </div>
  );
}

export default App;
