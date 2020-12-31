import React from "react";
import cx from 'clsx';
import { ReactComponent as ThunderboltAcquiringSymbolic } from '../../assets/icons/thunderbolt-acquiring-symbolic.svg';

function ThunderboltAcquiring({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ThunderboltAcquiringSymbolic)}
    </span>
  );
}

export default ThunderboltAcquiring;
