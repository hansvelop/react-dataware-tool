import * as React from "react";
import styles from "./TrackerBox.css";

interface MouseVal{
  setWidth : number,
  setHeight : number,
  setX : number,
  setY : number
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
    const {setWidth, setHeight, setX, setY} = this.props.mouseVal;
    const trackStyle = {
      width : setWidth != 0 ? setWidth + "px" : 0,
      height : setHeight != 0 ? setHeight + "px" : 0,
      left : setX != 0 ? setX + "px" : 0,
      top : setY != 0 ? setY + "px": 0
    } as React.CSSProperties;

    return (
      <div
        className={styles.TrackerBox}
        style={trackStyle}
      />
    );
  }
}

export default TrackerBox;