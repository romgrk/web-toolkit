import React from "react";
import cx from 'clsx';
import { ReactComponent as ZoomOutSymbolic } from '../../assets/icons/zoom-out-symbolic.svg';

function ZoomOut({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ZoomOutSymbolic)}
    </span>
  );
}

export default ZoomOut;
