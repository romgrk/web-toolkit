import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceKissSymbolic } from '../../assets/icons/face-kiss-symbolic.svg';

function FaceKiss({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceKissSymbolic)}
    </span>
  );
}

export default FaceKiss;
