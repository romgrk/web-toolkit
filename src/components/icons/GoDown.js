import React from "react";
import cx from 'clsx';
import { ReactComponent as GoDownSymbolic } from '../../assets/icons/go-down-symbolic.svg';

function GoDown({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoDownSymbolic)}
    </span>
  );
}

export default GoDown;
