import React from "react";
import cx from 'clsx';
import { ReactComponent as InputMouseSymbolic } from '../../assets/icons/input-mouse-symbolic.svg';

function InputMouse({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InputMouseSymbolic)}
    </span>
  );
}

export default InputMouse;
