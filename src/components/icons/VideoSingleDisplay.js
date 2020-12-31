import React from "react";
import cx from 'clsx';
import { ReactComponent as VideoSingleDisplaySymbolic } from '../../assets/icons/video-single-display-symbolic.svg';

function VideoSingleDisplay({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(VideoSingleDisplaySymbolic)}
    </span>
  );
}

export default VideoSingleDisplay;
