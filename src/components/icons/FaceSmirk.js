import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceSmirkSymbolic } from '../../assets/icons/face-smirk-symbolic.svg';

function FaceSmirk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceSmirkSymbolic)}
    </span>
  );
}

export default FaceSmirk;
