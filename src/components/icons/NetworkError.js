import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkErrorSymbolic } from '../../assets/icons/network-error-symbolic.svg';

function NetworkError({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkErrorSymbolic)}
    </span>
  );
}

export default NetworkError;
