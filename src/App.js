import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Videos from "./Components/Videos";
function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      <div class="app__container">
        <Sidebar/>
        <Videos/>
      </div>
      {/* Sidebar */}
      {/* Content */}
    </div>
  );
}

export default App;
