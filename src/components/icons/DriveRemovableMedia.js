import React from "react";
import cx from 'clsx';
import { ReactComponent as DriveRemovableMediaSymbolic } from '../../assets/icons/drive-removable-media-symbolic.svg';

function DriveRemovableMedia({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DriveRemovableMediaSymbolic)}
    </span>
  );
}

export default DriveRemovableMedia;
