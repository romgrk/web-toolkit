import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceConfusedSymbolic } from '../../assets/icons/face-confused-symbolic.svg';

function FaceConfused({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceConfusedSymbolic)}
    </span>
  );
}

export default FaceConfused;
