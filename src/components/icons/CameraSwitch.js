import React from "react";
import cx from 'clsx';
import { ReactComponent as CameraSwitchSymbolic } from '../../assets/icons/camera-switch-symbolic.svg';

function CameraSwitch({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CameraSwitchSymbolic)}
    </span>
  );
}

export default CameraSwitch;
