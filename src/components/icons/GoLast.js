import React from "react";
import cx from 'clsx';
import { ReactComponent as GoLastSymbolic } from '../../assets/icons/go-last-symbolic.svg';

function GoLast({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoLastSymbolic)}
    </span>
  );
}

export default GoLast;
