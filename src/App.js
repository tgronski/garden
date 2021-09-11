import React from "react";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import Container from "./Container";
import data from "./data";
import "./App.css";

class App extends React.Component {
  renderMainRoutes(x) {
    const autumn = x.filter((x) => x.season === "Fall");
    const spring = x.filter((x) => x.season === "Spring");
    return (
      <span>
        <Route path="/autumn" component={() => <Container data={autumn} />} />
        <Route exact path="/" component={() => <Container data={x} />} />
        <Route path="/spring" component={() => <Container data={spring} />} />
      </span>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <div className="Main">
          <span>{this.renderMainRoutes(data)}</span>
        </div>
      </div>
    );
  }
}

export default App;
