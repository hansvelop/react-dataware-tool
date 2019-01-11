/**
 * @class DatawareImageTool
 */

import * as React from "react";

import styles from "./styles.css";

export type Props = { 
  imgSrc: string,
  width: string,
  height: string
};

export type State = { 
  trackWidth: number,
  trackHeight: number
};

export default class DatawareImageTool extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      trackWidth : 0,
      trackHeight: 0
    }
  }
  render() {
    let { imgSrc, width, height } = this.props;
    let imgBoneStyle = {};
    if( width > height ){
      imgBoneStyle = {
        width : '100%',
        lineHeight : height
      }
    }else if( height > width ){
      imgBoneStyle = {
        height : '100%'
      }
    }else{
      imgBoneStyle ={
        width: '100%',
        height: '100%'
      }
    }
    imgSrc = imgSrc ? imgSrc : "http://t1.daumcdn.net/brunch/service/user/3EZt/image/FFz2cVHd6gvdJTtamgy5rN0fFN4.jpg"
    let bgStyle = {
      width : width ? width+'px' : '100%',
      height :  height ? height+'px' : '100%',
      lineHeight : height+"px"
    }
    
    const {trackWidth, trackHeight} = this.state;
    
    return (
      <div className={styles.bgPattern} style={bgStyle}>
        <div className={styles.track} style={{width: trackWidth+"px", height: trackHeight+"px"}}></div>
        <img className={styles.imgBone} style={imgBoneStyle} src={imgSrc} />
      </div>
    );
  }
}
