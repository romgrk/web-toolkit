import React from "react";
import cx from 'clsx';
import { ReactComponent as GoUpSymbolic } from '../../assets/icons/go-up-symbolic.svg';

function GoUp({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoUpSymbolic)}
    </span>
  );
}

export default GoUp;
