import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioXGenericSymbolic } from '../../assets/icons/audio-x-generic-symbolic.svg';

function AudioXGeneric({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioXGenericSymbolic)}
    </span>
  );
}

export default AudioXGeneric;
