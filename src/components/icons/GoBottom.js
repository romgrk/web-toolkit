import React from "react";
import cx from 'clsx';
import { ReactComponent as GoBottomSymbolic } from '../../assets/icons/go-bottom-symbolic.svg';

function GoBottom({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoBottomSymbolic)}
    </span>
  );
}

export default GoBottom;
