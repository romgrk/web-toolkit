import React from "react";
import cx from 'clsx';
import { ReactComponent as CameraVideoSymbolic } from '../../assets/icons/camera-video-symbolic.svg';

function CameraVideo({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CameraVideoSymbolic)}
    </span>
  );
}

export default CameraVideo;
