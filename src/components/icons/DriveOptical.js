import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveOpticalSymbolic } from '../../assets/icons/drive-optical-symbolic.svg';

function DriveOptical({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveOpticalSymbolic)}
    </span>
  );
}

export default DriveOptical;
