import React from "react";
import cx from 'clsx';
import { ReactComponent as ImageLoadingSymbolic } from '../../assets/icons/image-loading-symbolic.svg';

function ImageLoading({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ImageLoadingSymbolic)}
    </span>
  );
}

export default ImageLoading;
