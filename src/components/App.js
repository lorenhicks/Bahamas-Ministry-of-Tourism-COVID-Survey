import React, { Component } from "react";
import Counter from "./TestCounter";
import CheckboxExampleRadioGroup from "./CheckboxComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Counter />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

/* Authors: Raul La Rosa and Loren Hicks */
