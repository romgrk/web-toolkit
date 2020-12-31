import React from "react";
import cx from 'clsx';
import { ReactComponent as PowerProfilePerformanceSymbolic } from '../../assets/icons/power-profile-performance-symbolic.svg';

function PowerProfilePerformance({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PowerProfilePerformanceSymbolic)}
    </span>
  );
}

export default PowerProfilePerformance;
