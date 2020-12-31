import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemMusicSymbolic } from '../../assets/icons/emblem-music-symbolic.svg';

function EmblemMusic({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemMusicSymbolic)}
    </span>
  );
}

export default EmblemMusic;
