import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemFileManagerSymbolic } from '../../assets/icons/system-file-manager-symbolic.svg';

function SystemFileManager({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemFileManagerSymbolic)}
    </span>
  );
}

export default SystemFileManager;
