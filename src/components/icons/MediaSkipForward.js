import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaSkipForwardSymbolic } from '../../assets/icons/media-skip-forward-symbolic.svg';

function MediaSkipForward({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaSkipForwardSymbolic)}
    </span>
  );
}

export default MediaSkipForward;
