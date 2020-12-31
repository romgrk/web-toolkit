import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWorkgroupSymbolic } from '../../assets/icons/network-workgroup-symbolic.svg';

function NetworkWorkgroup({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWorkgroupSymbolic)}
    </span>
  );
}

export default NetworkWorkgroup;
