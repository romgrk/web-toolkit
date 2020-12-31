import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaZipSymbolic } from '../../assets/icons/media-zip-symbolic.svg';

function MediaZip({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaZipSymbolic)}
    </span>
  );
}

export default MediaZip;
