import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewMoreHorizontalSymbolic } from '../../assets/icons/view-more-horizontal-symbolic.svg';

function ViewMoreHorizontal({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewMoreHorizontalSymbolic)}
    </span>
  );
}

export default ViewMoreHorizontal;
