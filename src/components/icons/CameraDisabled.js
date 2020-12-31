import React from "react";
import cx from 'clsx';
import { ReactComponent as CameraDisabledSymbolic } from '../../assets/icons/camera-disabled-symbolic.svg';

function CameraDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CameraDisabledSymbolic)}
    </span>
  );
}

export default CameraDisabled;
