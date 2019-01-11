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

export default class DatawareImageTool extends React.Component<Props> {
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
    width = width ? width+'px' : '100%';
    height = height ? height+'px' : '100%';
    imgSrc = imgSrc ? imgSrc : "http://t1.daumcdn.net/brunch/service/user/3EZt/image/FFz2cVHd6gvdJTtamgy5rN0fFN4.jpg"
    let bgStyle = {
      width : width,
      height : height,
      textalign : 'center'
    }
    return (
      <div className={styles.bgPattern} style={bgStyle}>
        <div className={styles.track}></div>
        <img className={styles.imgBone} style={imgBoneStyle} src={imgSrc} />
      </div>
    );
  }
}
