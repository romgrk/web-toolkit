import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkServerSymbolic } from '../../assets/icons/network-server-symbolic.svg';

function NetworkServer({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkServerSymbolic)}
    </span>
  );
}

export default NetworkServer;
