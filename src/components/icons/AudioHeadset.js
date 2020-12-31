import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioHeadsetSymbolic } from '../../assets/icons/audio-headset-symbolic.svg';

function AudioHeadset({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioHeadsetSymbolic)}
    </span>
  );
}

export default AudioHeadset;
