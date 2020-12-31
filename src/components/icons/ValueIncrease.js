import React from "react";
import cx from 'clsx';
import { ReactComponent as ValueIncreaseSymbolic } from '../../assets/icons/value-increase-symbolic.svg';

function ValueIncrease({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ValueIncreaseSymbolic)}
    </span>
  );
}

export default ValueIncrease;
