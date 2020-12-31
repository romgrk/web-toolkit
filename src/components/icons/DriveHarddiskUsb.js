import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveHarddiskUsbSymbolic } from '../../assets/icons/drive-harddisk-usb-symbolic.svg';

function DriveHarddiskUsb({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveHarddiskUsbSymbolic)}
    </span>
  );
}

export default DriveHarddiskUsb;
