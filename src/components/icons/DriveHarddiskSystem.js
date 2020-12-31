import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveHarddiskSystemSymbolic } from '../../assets/icons/drive-harddisk-system-symbolic.svg';

function DriveHarddiskSystem({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveHarddiskSystemSymbolic)}
    </span>
  );
}

export default DriveHarddiskSystem;
