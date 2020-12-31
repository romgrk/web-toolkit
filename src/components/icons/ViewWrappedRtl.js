import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewWrappedRtlSymbolic } from '../../assets/icons/view-wrapped-symbolic-rtl.svg';

function ViewWrappedRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewWrappedRtlSymbolic)}
    </span>
  );
}

export default ViewWrappedRtl;
