import React from "react";
import cx from 'clsx';
import { ReactComponent as FolderMusicSymbolic } from '../../assets/icons/folder-music-symbolic.svg';

function FolderMusic({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FolderMusicSymbolic)}
    </span>
  );
}

export default FolderMusic;
