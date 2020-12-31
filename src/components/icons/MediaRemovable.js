import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaRemovableSymbolic } from '../../assets/icons/media-removable-symbolic.svg';

function MediaRemovable({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaRemovableSymbolic)}
    </span>
  );
}

export default MediaRemovable;
