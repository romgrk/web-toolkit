import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkReceiveSymbolic } from '../../assets/icons/network-receive-symbolic.svg';

function NetworkReceive({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkReceiveSymbolic)}
    </span>
  );
}

export default NetworkReceive;
