/**
 * @class DatawareCrop
 */

import * as React from 'react'
import styles from "./DatawareCrop.css";
import TrackerBox from "../TrackerBox";

interface Props {
  imgSrc: string;
  width: string;
  height: string;
}
interface State {
  setWidth: number;
  setHeight: number;
  setX: number;
  setY: number;
}

let mouseClickFlag = false;
let trackerX = 0;
let trackerY = 0;
export default class DatawareCrop extends React.Component<Props, State> {
    constructor(props: Props) {
        console.log("constructor");
        super(props);
        this.state = {
          setWidth: 0,
          setHeight: 0,
          setX: 0,
          setY: 0
        }
        // this.mouseEventDown = this.mouseEventDown.bind(this);
        // this.mouseEventUp = this.mouseEventUp.bind(this);
        // this.mouseEventMove = this.mouseEventMove.bind(this);
      }
      
      mouseEventDown(event:MouseEvent) {
        console.log("mouse Down");
        trackerX = 0;
        trackerY = 0;
        this.setState({
          setWidth: 0,
          setHeight: 0,
          setX: 0,
          setY: 0
        });
        trackerX = event.clientX;
        trackerY = event.clientY;
        mouseClickFlag = true;
      }
    
      mouseEventUp() {
        console.log("mouse Up");
        
        mouseClickFlag = false;
      }
    
      mouseEventMove(event: MouseEvent) {
        event.preventDefault();
        if (mouseClickFlag) {
          this.setState({
            setWidth: event.clientX - trackerX-4,
            setHeight: event.clientY - trackerY-4,
            setX: trackerX,
            setY: trackerY
          });
        }
      }
    
      render() {
        let { imgSrc, width, height } = this.props;
        let imgBoneStyle = {};
        if (width > height) {
          imgBoneStyle = {
            width: "100%",
            lineHeight: height
          };
        } else if (height > width) {
          imgBoneStyle = {
            height: "100%"
          };
        } else {
          imgBoneStyle = {
            width: "100%",
            height: "100%"
          };
        }
        imgSrc = imgSrc
          ? imgSrc
          // : "http://t1.daumcdn.net/brunch/service/user/3EZt/image/FFz2cVHd6gvdJTtamgy5rN0fFN4.jpg";
          : "http://designhumor.kr/wp-content/uploads/2016/12/Factory-production-line-3d-simulation-810x540.jpg";

        let bgStyle = {
          width: width ? width + "px" : "100%",
          height: height ? height + "px" : "100%",
          lineHeight: height + "px"
        };

        const mouseVal = this.state;
        return (
          <div className={styles.bgPattern} style={bgStyle}>
            <TrackerBox mouseVal={mouseVal}  />
            <img
              className={styles.imgBone}
              style={imgBoneStyle}
              src={imgSrc}
              onMouseDownCapture={this.mouseEventDown.bind(this)}
              onMouseMoveCapture={this.mouseEventMove.bind(this)}
              onMouseMove={this.mouseEventMove.bind(this)}
              onMouseUpCapture={this.mouseEventUp.bind(this)}
              
            />
          </div>
        );
      }
}
