import React from "react";
import cx from 'clsx';
import { ReactComponent as RadioCheckedSymbolic } from '../../assets/icons/radio-checked-symbolic.svg';

function RadioChecked({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(RadioCheckedSymbolic)}
    </span>
  );
}

export default RadioChecked;
