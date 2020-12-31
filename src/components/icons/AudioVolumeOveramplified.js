import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioVolumeOveramplifiedSymbolic } from '../../assets/icons/audio-volume-overamplified-symbolic.svg';

function AudioVolumeOveramplified({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioVolumeOveramplifiedSymbolic)}
    </span>
  );
}

export default AudioVolumeOveramplified;
