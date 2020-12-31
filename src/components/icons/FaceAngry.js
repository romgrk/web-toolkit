import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceAngrySymbolic } from '../../assets/icons/face-angry-symbolic.svg';

function FaceAngry({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceAngrySymbolic)}
    </span>
  );
}

export default FaceAngry;
