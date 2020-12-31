import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewContinuousSymbolic } from '../../assets/icons/view-continuous-symbolic.svg';

function ViewContinuous({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewContinuousSymbolic)}
    </span>
  );
}

export default ViewContinuous;
