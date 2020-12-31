import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceSmileSymbolic } from '../../assets/icons/face-smile-symbolic.svg';

function FaceSmile({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceSmileSymbolic)}
    </span>
  );
}

export default FaceSmile;
