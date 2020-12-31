import React from "react";
import cx from 'clsx';
import { ReactComponent as PowerProfileBalancedSymbolic } from '../../assets/icons/power-profile-balanced-symbolic.svg';

function PowerProfileBalanced({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PowerProfileBalancedSymbolic)}
    </span>
  );
}

export default PowerProfileBalanced;
