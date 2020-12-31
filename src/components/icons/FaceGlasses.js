import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceGlassesSymbolic } from '../../assets/icons/face-glasses-symbolic.svg';

function FaceGlasses({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceGlassesSymbolic)}
    </span>
  );
}

export default FaceGlasses;
