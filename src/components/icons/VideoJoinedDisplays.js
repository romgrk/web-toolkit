import React from "react";
import cx from 'clsx';
import { ReactComponent as VideoJoinedDisplaysSymbolic } from '../../assets/icons/video-joined-displays-symbolic.svg';

function VideoJoinedDisplays({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(VideoJoinedDisplaysSymbolic)}
    </span>
  );
}

export default VideoJoinedDisplays;
