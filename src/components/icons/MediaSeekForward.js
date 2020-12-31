import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaSeekForwardSymbolic } from '../../assets/icons/media-seek-forward-symbolic.svg';

function MediaSeekForward({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaSeekForwardSymbolic)}
    </span>
  );
}

export default MediaSeekForward;
