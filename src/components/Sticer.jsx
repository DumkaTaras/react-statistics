import sticers from "../sticer.json";
import React, { Component } from "react";
import Sticer_List from "./SticerList";
import { useState } from "react";
import "./sticers.css";


class Sticer_Form extends Component {
    state = {
        choice: "",
    }
        changeChoice = (value) => {
  this.setState({ choice: value });
}

  render() {
    return (
      <div className="sticer_List">
        <h2>Choice: {this.state.choice}</h2>
        <ul className="list">
          {sticers.map((el, index) => 
            <li key={index} onClick={() => this.changeChoice(el.label)}>
                <Sticer_List img={el.img} title={el.label}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Sticer_Form;