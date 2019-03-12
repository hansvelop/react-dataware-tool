import * as React from "react";
import styles from "./TrackerBox.css";

interface MouseVal{
  width : number,
  height : number,
  x : number,
  y : number
} 

interface Props{
  mouseVal : MouseVal
}

class TrackerBox extends React.Component<Props> {
  constructor(props: Props){
    console.log("constructor ==> TrackerBox");
    super(props);
  }
  
  render() {
    const {width, height, x, y} = this.props.mouseVal;
    const trackStyle = {
      width : width != 0 ? width + "px" : 0,
      height : height != 0 ? height + "px" : 0,
      left : x != 0 ? x + "px" : 0,
      top : y != 0 ? y + "px": 0
    };

    return (
      <div
        className={styles.TrackerBox}
        style={trackStyle}
      />
    );
  }
}

export default TrackerBox;