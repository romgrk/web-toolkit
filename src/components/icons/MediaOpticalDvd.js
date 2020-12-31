import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaOpticalDvdSymbolic } from '../../assets/icons/media-optical-dvd-symbolic.svg';

function MediaOpticalDvd({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaOpticalDvdSymbolic)}
    </span>
  );
}

export default MediaOpticalDvd;
