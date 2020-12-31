import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewMoreSymbolic } from '../../assets/icons/view-more-symbolic.svg';

function ViewMore({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewMoreSymbolic)}
    </span>
  );
}

export default ViewMore;
