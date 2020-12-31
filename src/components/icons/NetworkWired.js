import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWiredSymbolic } from '../../assets/icons/network-wired-symbolic.svg';

function NetworkWired({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWiredSymbolic)}
    </span>
  );
}

export default NetworkWired;
