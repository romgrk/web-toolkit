import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewFullscreenSymbolic } from '../../assets/icons/view-fullscreen-symbolic.svg';

function ViewFullscreen({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewFullscreenSymbolic)}
    </span>
  );
}

export default ViewFullscreen;
