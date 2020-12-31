import React from "react";
import cx from 'clsx';
import { ReactComponent as GoPreviousSymbolic } from '../../assets/icons/go-previous-symbolic.svg';

function GoPrevious({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoPreviousSymbolic)}
    </span>
  );
}

export default GoPrevious;
