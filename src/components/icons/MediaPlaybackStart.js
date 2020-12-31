import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaybackStartSymbolic } from '../../assets/icons/media-playback-start-symbolic.svg';

function MediaPlaybackStart({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaybackStartSymbolic)}
    </span>
  );
}

export default MediaPlaybackStart;
