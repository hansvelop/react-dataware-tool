import React, { Component } from "react";

import DatawareImageTool from "react-dataware-tool";

export default class App extends Component {
  render() {
    return (
      <div>
        <DatawareImageTool width={500} height={300}imgSrc="http://fujifilm.kr/products/digital_cameras/accessories/lens/conversionlens/x100teleconversionlens/sample_images/img/index/ff_x100teleconversionlens_001.JPG" />
      </div>
    );
  }
}
