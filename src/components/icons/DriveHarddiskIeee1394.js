import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveHarddiskIeee1394Symbolic } from '../../assets/icons/drive-harddisk-ieee1394-symbolic.svg';

function DriveHarddiskIeee1394({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveHarddiskIeee1394Symbolic)}
    </span>
  );
}

export default DriveHarddiskIeee1394;
