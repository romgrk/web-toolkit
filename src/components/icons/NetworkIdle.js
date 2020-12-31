import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkIdleSymbolic } from '../../assets/icons/network-idle-symbolic.svg';

function NetworkIdle({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkIdleSymbolic)}
    </span>
  );
}

export default NetworkIdle;
