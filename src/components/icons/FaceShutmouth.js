import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceShutmouthSymbolic } from '../../assets/icons/face-shutmouth-symbolic.svg';

function FaceShutmouth({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceShutmouthSymbolic)}
    </span>
  );
}

export default FaceShutmouth;
