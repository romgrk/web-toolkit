import React from "react";
import cx from 'clsx';
import { ReactComponent as FaceRaspberrySymbolic } from '../../assets/icons/face-raspberry-symbolic.svg';

function FaceRaspberry({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FaceRaspberrySymbolic)}
    </span>
  );
}

export default FaceRaspberry;
