import React from "react";
import cx from 'clsx';
import { ReactComponent as ChannelSecureSymbolic } from '../../assets/icons/channel-secure-symbolic.svg';

function ChannelSecure({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ChannelSecureSymbolic)}
    </span>
  );
}

export default ChannelSecure;
