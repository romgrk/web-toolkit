import React from "react";
import cx from 'clsx';
import { ReactComponent as InputDialpadSymbolic } from '../../assets/icons/input-dialpad-symbolic.svg';

function InputDialpad({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InputDialpadSymbolic)}
    </span>
  );
}

export default InputDialpad;
