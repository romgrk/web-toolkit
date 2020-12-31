import React from "react";
import cx from 'clsx';
import { ReactComponent as ComputerFailSymbolic } from '../../assets/icons/computer-fail-symbolic.svg';

function ComputerFail({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ComputerFailSymbolic)}
    </span>
  );
}

export default ComputerFail;
