import React from "react";
import cx from 'clsx';
import { ReactComponent as RadioMixedSymbolic } from '../../assets/icons/radio-mixed-symbolic.svg';

function RadioMixed({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(RadioMixedSymbolic)}
    </span>
  );
}

export default RadioMixed;
