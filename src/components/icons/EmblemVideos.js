import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemVideosSymbolic } from '../../assets/icons/emblem-videos-symbolic.svg';

function EmblemVideos({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemVideosSymbolic)}
    </span>
  );
}

export default EmblemVideos;
