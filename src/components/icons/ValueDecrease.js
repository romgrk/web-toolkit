import React from "react";
import cx from 'clsx';
import { ReactComponent as ValueDecreaseSymbolic } from '../../assets/icons/value-decrease-symbolic.svg';

function ValueDecrease({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ValueDecreaseSymbolic)}
    </span>
  );
}

export default ValueDecrease;
