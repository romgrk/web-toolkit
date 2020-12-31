import React from "react";
import cx from 'clsx';
import { ReactComponent as ZoomOriginalSymbolic } from '../../assets/icons/zoom-original-symbolic.svg';

function ZoomOriginal({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ZoomOriginalSymbolic)}
    </span>
  );
}

export default ZoomOriginal;
