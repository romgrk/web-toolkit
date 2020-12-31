import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewWrappedSymbolic } from '../../assets/icons/view-wrapped-symbolic.svg';

function ViewWrapped({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewWrappedSymbolic)}
    </span>
  );
}

export default ViewWrapped;
