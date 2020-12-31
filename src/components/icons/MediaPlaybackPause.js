import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaybackPauseSymbolic } from '../../assets/icons/media-playback-pause-symbolic.svg';

function MediaPlaybackPause({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaybackPauseSymbolic)}
    </span>
  );
}

export default MediaPlaybackPause;
