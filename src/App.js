import React, { Component } from "react";
import FibWithClass from "./components/FibWithClass";
import IdFooter from "./components/IdFooter";

class App extends Component {
  render() {
    return (
      <>
        <FibWithClass />
        <IdFooter />
      </>
    );
  }
}

export default App;
