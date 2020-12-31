import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaFloppySymbolic } from '../../assets/icons/media-floppy-symbolic.svg';

function MediaFloppy({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaFloppySymbolic)}
    </span>
  );
}

export default MediaFloppy;
