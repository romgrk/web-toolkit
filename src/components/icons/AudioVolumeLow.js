import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioVolumeLowSymbolic } from '../../assets/icons/audio-volume-low-symbolic.svg';

function AudioVolumeLow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioVolumeLowSymbolic)}
    </span>
  );
}

export default AudioVolumeLow;
