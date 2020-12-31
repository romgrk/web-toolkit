import React from "react";
import cx from 'clsx';
import { ReactComponent as AudioVolumeMediumSymbolic } from '../../assets/icons/audio-volume-medium-symbolic.svg';

function AudioVolumeMedium({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AudioVolumeMediumSymbolic)}
    </span>
  );
}

export default AudioVolumeMedium;
