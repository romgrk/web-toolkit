import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaybackStopSymbolic } from '../../assets/icons/media-playback-stop-symbolic.svg';

function MediaPlaybackStop({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaybackStopSymbolic)}
    </span>
  );
}

export default MediaPlaybackStop;
