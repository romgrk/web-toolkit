import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaPlaylistShuffleSymbolic } from '../../assets/icons/media-playlist-shuffle-symbolic.svg';

function MediaPlaylistShuffle({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaPlaylistShuffleSymbolic)}
    </span>
  );
}

export default MediaPlaylistShuffle;
