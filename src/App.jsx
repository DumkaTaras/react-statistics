import React, { Component } from "react";
import { useState } from "react";
import Render_Sticers from "./components/Choice";
import Sticer_Form from "./components/Sticer";
import sticers from "./sticer.json";
import Statistic from "./Statistic/statistic";


const App = () => {
  return (
    <div className="k">
      {/* <h1 style={{textAlign:"center"}}>Sticerst</h1> */}
      {/* <NameForm></NameForm> */}
      <Render_Sticers/>
      {/* <Statistic/> */}
    </div>
  );
};

export default App;
