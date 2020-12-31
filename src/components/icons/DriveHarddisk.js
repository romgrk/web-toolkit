import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveHarddiskSymbolic } from '../../assets/icons/drive-harddisk-symbolic.svg';

function DriveHarddisk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveHarddiskSymbolic)}
    </span>
  );
}

export default DriveHarddisk;
