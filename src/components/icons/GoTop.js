import React from "react";
import cx from 'clsx';
import { ReactComponent as GoTopSymbolic } from '../../assets/icons/go-top-symbolic.svg';

function GoTop({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoTopSymbolic)}
    </span>
  );
}

export default GoTop;
