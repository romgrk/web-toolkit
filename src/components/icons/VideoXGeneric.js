import React from "react";
import cx from 'clsx';
import { ReactComponent as VideoXGenericSymbolic } from '../../assets/icons/video-x-generic-symbolic.svg';

function VideoXGeneric({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(VideoXGenericSymbolic)}
    </span>
  );
}

export default VideoXGeneric;
