import React from "react";
import cx from 'clsx';
import { ReactComponent as InputKeyboardSymbolic } from '../../assets/icons/input-keyboard-symbolic.svg';

function InputKeyboard({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InputKeyboardSymbolic)}
    </span>
  );
}

export default InputKeyboard;
