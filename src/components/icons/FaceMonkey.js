import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceMonkeySymbolic } from '../../assets/icons/face-monkey-symbolic.svg';

function FaceMonkey({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceMonkeySymbolic)}
    </span>
  );
}

export default FaceMonkey;
