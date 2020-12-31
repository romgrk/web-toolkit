import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaybackStartRtlSymbolic } from '../../assets/icons/media-playback-start-symbolic-rtl.svg';

function MediaPlaybackStartRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaybackStartRtlSymbolic)}
    </span>
  );
}

export default MediaPlaybackStartRtl;
