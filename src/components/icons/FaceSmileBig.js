import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceSmileBigSymbolic } from '../../assets/icons/face-smile-big-symbolic.svg';

function FaceSmileBig({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceSmileBigSymbolic)}
    </span>
  );
}

export default FaceSmileBig;
