import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderVideosSymbolic } from '../../assets/icons/folder-videos-symbolic.svg';

function FolderVideos({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderVideosSymbolic)}
    </span>
  );
}

export default FolderVideos;
