import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaSkipBackwardSymbolic } from '../../assets/icons/media-skip-backward-symbolic.svg';

function MediaSkipBackward({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaSkipBackwardSymbolic)}
    </span>
  );
}

export default MediaSkipBackward;
