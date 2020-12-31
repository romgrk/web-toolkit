import React from "react";
import cx from 'clsx';
import { ReactComponent as ImageXGenericSymbolic } from '../../assets/icons/image-x-generic-symbolic.svg';

function ImageXGeneric({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ImageXGenericSymbolic)}
    </span>
  );
}

export default ImageXGeneric;
