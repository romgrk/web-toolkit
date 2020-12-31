import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWiredAcquiringSymbolic } from '../../assets/icons/network-wired-acquiring-symbolic.svg';

function NetworkWiredAcquiring({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWiredAcquiringSymbolic)}
    </span>
  );
}

export default NetworkWiredAcquiring;
