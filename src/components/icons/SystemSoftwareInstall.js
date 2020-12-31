import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemSoftwareInstallSymbolic } from '../../assets/icons/system-software-install-symbolic.svg';

function SystemSoftwareInstall({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemSoftwareInstallSymbolic)}
    </span>
  );
}

export default SystemSoftwareInstall;
