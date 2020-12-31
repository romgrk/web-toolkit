import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewConcealSymbolic } from '../../assets/icons/view-conceal-symbolic.svg';

function ViewConceal({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewConcealSymbolic)}
    </span>
  );
}

export default ViewConceal;
