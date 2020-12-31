import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioCardSymbolic } from '../../assets/icons/audio-card-symbolic.svg';

function AudioCard({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioCardSymbolic)}
    </span>
  );
}

export default AudioCard;
