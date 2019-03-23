import React, { Component } from "react";

import DatawareCrop from "react-dataware-tool";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <DatawareCrop 
          // trakingInfo={}
          width={440}
          height={350}
        />
        <div>Preview</div>
      </div>
    );
  }
}
