import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioVolumeHighSymbolic } from '../../assets/icons/audio-volume-high-symbolic.svg';

function AudioVolumeHigh({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioVolumeHighSymbolic)}
    </span>
  );
}

export default AudioVolumeHigh;
