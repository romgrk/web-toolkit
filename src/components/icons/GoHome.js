import React from "react";
import cx from 'clsx';
import { ReactComponent as GoHomeSymbolic } from '../../assets/icons/go-home-symbolic.svg';

function GoHome({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoHomeSymbolic)}
    </span>
  );
}

export default GoHome;
