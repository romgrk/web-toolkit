import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaylistRepeatSongSymbolic } from '../../assets/icons/media-playlist-repeat-song-symbolic.svg';

function MediaPlaylistRepeatSong({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaylistRepeatSongSymbolic)}
    </span>
  );
}

export default MediaPlaylistRepeatSong;
