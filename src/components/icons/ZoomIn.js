import React from "react";
import cx from 'clsx';
import { ReactComponent as ZoomInSymbolic } from '../../assets/icons/zoom-in-symbolic.svg';

function ZoomIn({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ZoomInSymbolic)}
    </span>
  );
}

export default ZoomIn;
