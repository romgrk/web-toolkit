import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaylistRepeatSymbolic } from '../../assets/icons/media-playlist-repeat-symbolic.svg';

function MediaPlaylistRepeat({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaylistRepeatSymbolic)}
    </span>
  );
}

export default MediaPlaylistRepeat;
