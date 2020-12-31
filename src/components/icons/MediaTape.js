import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaTapeSymbolic } from '../../assets/icons/media-tape-symbolic.svg';

function MediaTape({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaTapeSymbolic)}
    </span>
  );
}

export default MediaTape;
