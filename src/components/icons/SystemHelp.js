import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemHelpSymbolic } from '../../assets/icons/system-help-symbolic.svg';

function SystemHelp({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemHelpSymbolic)}
    </span>
  );
}

export default SystemHelp;
