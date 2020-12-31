import React from "react";
import cx from 'clsx';
import { ReactComponent as ChannelInsecureSymbolic } from '../../assets/icons/channel-insecure-symbolic.svg';

function ChannelInsecure({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ChannelInsecureSymbolic)}
    </span>
  );
}

export default ChannelInsecure;
