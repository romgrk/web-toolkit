import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceWorriedSymbolic } from '../../assets/icons/face-worried-symbolic.svg';

function FaceWorried({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceWorriedSymbolic)}
    </span>
  );
}

export default FaceWorried;
