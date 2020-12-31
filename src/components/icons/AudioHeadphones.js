import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioHeadphonesSymbolic } from '../../assets/icons/audio-headphones-symbolic.svg';

function AudioHeadphones({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioHeadphonesSymbolic)}
    </span>
  );
}

export default AudioHeadphones;
