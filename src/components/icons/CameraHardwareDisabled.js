import React from "react";
import cx from 'clsx';
import { ReactComponent as CameraHardwareDisabledSymbolic } from '../../assets/icons/camera-hardware-disabled-symbolic.svg';

function CameraHardwareDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CameraHardwareDisabledSymbolic)}
    </span>
  );
}

export default CameraHardwareDisabled;
