import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./sidebar";
import "./styles.css";

function App() {
  return (
    <div className="App" id="outer-container">
      <SideBar />
      <main id="page-wrap">
        {" "}
        <div className="page-wrap" />
        <h1>Cool Place Bro</h1>
        <h2>Best Pizza on the planet</h2>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
