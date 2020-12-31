import React from "react";
import cx from 'clsx';
import { ReactComponent as RadioSymbolic } from '../../assets/icons/radio-symbolic.svg';

function Radio({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(RadioSymbolic)}
    </span>
  );
}

export default Radio;
