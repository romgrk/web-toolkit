import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaEjectSymbolic } from '../../assets/icons/media-eject-symbolic.svg';

function MediaEject({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaEjectSymbolic)}
    </span>
  );
}

export default MediaEject;
