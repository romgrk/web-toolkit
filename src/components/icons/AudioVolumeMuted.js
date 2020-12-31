import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioVolumeMutedSymbolic } from '../../assets/icons/audio-volume-muted-symbolic.svg';

function AudioVolumeMuted({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioVolumeMutedSymbolic)}
    </span>
  );
}

export default AudioVolumeMuted;
