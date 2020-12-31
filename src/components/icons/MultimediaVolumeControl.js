import React from "react";
import cx from 'clsx';
import { ReactComponent as MultimediaVolumeControlSymbolic } from '../../assets/icons/multimedia-volume-control-symbolic.svg';

function MultimediaVolumeControl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MultimediaVolumeControlSymbolic)}
    </span>
  );
}

export default MultimediaVolumeControl;
