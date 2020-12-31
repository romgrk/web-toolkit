import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemRunSymbolic } from '../../assets/icons/system-run-symbolic.svg';

function SystemRun({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemRunSymbolic)}
    </span>
  );
}

export default SystemRun;
