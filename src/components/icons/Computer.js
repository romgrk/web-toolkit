import React from "react";
import cx from 'clsx';
import { ReactComponent as ComputerSymbolic } from '../../assets/icons/computer-symbolic.svg';

function Computer({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ComputerSymbolic)}
    </span>
  );
}

export default Computer;
