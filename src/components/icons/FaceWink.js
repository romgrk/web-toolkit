import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceWinkSymbolic } from '../../assets/icons/face-wink-symbolic.svg';

function FaceWink({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceWinkSymbolic)}
    </span>
  );
}

export default FaceWink;
