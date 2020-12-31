import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioInputMicrophoneSymbolic } from '../../assets/icons/audio-input-microphone-symbolic.svg';

function AudioInputMicrophone({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioInputMicrophoneSymbolic)}
    </span>
  );
}

export default AudioInputMicrophone;
