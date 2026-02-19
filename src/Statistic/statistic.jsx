import React, { Component } from "react";
import styled from "styled-components";
import "./statistic.css";

let Button = styled.button`
  color: black;
  font-size: 16px;
  border: solid 1px black;

  &:hover {
    opacity: 0.9;
  }
`;
let Good = styled(Button)`
  background-color: green;
`;
let Neutral = styled(Button)`
  background-color: yellow;
`;
let Bad = styled(Button)`
  background-color: red;
`;

let Interest = styled.span`
  font-weight: 500;
  font-size: 22px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodCounter = () => {
    this.setState({ good: this.state.good + 1 });
  };
  neutralCounter = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  badCounter = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  render() {
    let positiveFeed = parseInt(
      (100 / (this.state.bad + this.state.good + this.state.neutral)) *
        this.state.good,
    );
    if (
      (this.state.bad === 0) &
      (this.state.good === 0) &
      (this.state.neutral === 0)
    ) {
      positiveFeed = 0;
    }
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <div className="buttons_Stat">
          <Good className="Good" onClick={this.goodCounter}>
            Good
          </Good>
          <Neutral className="Neutral" onClick={this.neutralCounter}>
            Neatural
          </Neutral>
          <Bad className="Bad" onClick={this.badCounter}>
            Bad
          </Bad>
        </div>
        <h2>Statistics</h2>

        <div className="statistics">
          <p className="Good_statistic">Good: {this.state.good}</p>
          <p className="Neutral_statistic">Neutral: {this.state.neutral}</p>
          <p className="Bad_statistic">Bad: {this.state.bad}</p>
        </div>

        <h3>Positive feedback: <Interest>{positiveFeed}</Interest>%</h3>
      </div>
    );
  }
}

export default Statistic;
