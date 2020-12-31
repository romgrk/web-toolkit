import React from "react";
import cx from 'clsx';
import { ReactComponent as ZoomFitBestSymbolic } from '../../assets/icons/zoom-fit-best-symbolic.svg';

function ZoomFitBest({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ZoomFitBestSymbolic)}
    </span>
  );
}

export default ZoomFitBest;
