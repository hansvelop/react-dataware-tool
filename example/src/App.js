import React, { Component } from "react";

import DatawareCrop from "react-dataware-tool";

export default class App extends Component {
  render() {
    return (
      <DatawareCrop 
        width={440}
        height={350}
      />
    );
  }
}
