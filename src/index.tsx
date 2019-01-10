/**
 * @class DatawareImageTool
 */

import * as React from "react";

import styles from "./styles.css";

export type Props = { 
  imgSrc: string,
  width: number,
  height: number
};

export default class DatawareImageTool extends React.Component<Props> {
  render() {
    const { imgSrc, width, height } = this.props;

    return (
      <div>
        <img src={imgSrc} width={width} height={height} />
      </div>
    );
  }
}
