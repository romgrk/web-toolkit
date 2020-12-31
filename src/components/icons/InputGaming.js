import React from "react";
import cx from 'clsx';
import { ReactComponent as InputGamingSymbolic } from '../../assets/icons/input-gaming-symbolic.svg';

function InputGaming({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InputGamingSymbolic)}
    </span>
  );
}

export default InputGaming;
