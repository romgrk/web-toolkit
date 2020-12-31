import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaSeekBackwardSymbolic } from '../../assets/icons/media-seek-backward-symbolic.svg';

function MediaSeekBackward({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaSeekBackwardSymbolic)}
    </span>
  );
}

export default MediaSeekBackward;
