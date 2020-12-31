import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaFlashSymbolic } from '../../assets/icons/media-flash-symbolic.svg';

function MediaFlash({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaFlashSymbolic)}
    </span>
  );
}

export default MediaFlash;
