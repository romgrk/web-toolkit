import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaylistConsecutiveSymbolic } from '../../assets/icons/media-playlist-consecutive-symbolic.svg';

function MediaPlaylistConsecutive({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaylistConsecutiveSymbolic)}
    </span>
  );
}

export default MediaPlaylistConsecutive;
