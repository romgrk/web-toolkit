import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewRevealSymbolic } from '../../assets/icons/view-reveal-symbolic.svg';

function ViewReveal({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewRevealSymbolic)}
    </span>
  );
}

export default ViewReveal;
