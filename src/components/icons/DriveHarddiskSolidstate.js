import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveHarddiskSolidstateSymbolic } from '../../assets/icons/drive-harddisk-solidstate-symbolic.svg';

function DriveHarddiskSolidstate({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveHarddiskSolidstateSymbolic)}
    </span>
  );
}

export default DriveHarddiskSolidstate;
