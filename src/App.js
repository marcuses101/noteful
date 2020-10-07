import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar"

function App({store}) {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar {...store} />
        <Main {...store}/>
      </div>
    </div>
  );
}

export default App;
