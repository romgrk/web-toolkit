import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioSpeakersSymbolic } from '../../assets/icons/audio-speakers-symbolic.svg';

function AudioSpeakers({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioSpeakersSymbolic)}
    </span>
  );
}

export default AudioSpeakers;
