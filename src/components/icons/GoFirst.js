import React from "react";
import cx from 'clsx';
import { ReactComponent as GoFirstSymbolic } from '../../assets/icons/go-first-symbolic.svg';

function GoFirst({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoFirstSymbolic)}
    </span>
  );
}

export default GoFirst;
