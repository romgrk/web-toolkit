import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveMultidiskSymbolic } from '../../assets/icons/drive-multidisk-symbolic.svg';

function DriveMultidisk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveMultidiskSymbolic)}
    </span>
  );
}

export default DriveMultidisk;
