import React from "react";
import cx from 'clsx';
import { ReactComponent as CameraPhotoSymbolic } from '../../assets/icons/camera-photo-symbolic.svg';

function CameraPhoto({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CameraPhotoSymbolic)}
    </span>
  );
}

export default CameraPhoto;
