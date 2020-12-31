import React from "react";
import cx from 'clsx';
import { ReactComponent as VideoDisplaySymbolic } from '../../assets/icons/video-display-symbolic.svg';

function VideoDisplay({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(VideoDisplaySymbolic)}
    </span>
  );
}

export default VideoDisplay;
