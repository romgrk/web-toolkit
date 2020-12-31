import React from "react";
import cx from 'clsx';
import { ReactComponent as CameraWebSymbolic } from '../../assets/icons/camera-web-symbolic.svg';

function CameraWeb({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CameraWebSymbolic)}
    </span>
  );
}

export default CameraWeb;
