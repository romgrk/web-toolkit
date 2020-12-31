import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaOpticalSymbolic } from '../../assets/icons/media-optical-symbolic.svg';

function MediaOptical({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaOpticalSymbolic)}
    </span>
  );
}

export default MediaOptical;
