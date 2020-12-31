import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaOpticalCdAudioSymbolic } from '../../assets/icons/media-optical-cd-audio-symbolic.svg';

function MediaOpticalCdAudio({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaOpticalCdAudioSymbolic)}
    </span>
  );
}

export default MediaOpticalCdAudio;
