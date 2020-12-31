import React from "react";
import cx from 'clsx';
import { ReactComponent as MediaViewSubtitlesSymbolic } from '../../assets/icons/media-view-subtitles-symbolic.svg';

function MediaViewSubtitles({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MediaViewSubtitlesSymbolic)}
    </span>
  );
}

export default MediaViewSubtitles;
