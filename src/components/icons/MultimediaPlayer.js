import React from "react";
import cx from 'clsx';
import { ReactComponent as MultimediaPlayerSymbolic } from '../../assets/icons/multimedia-player-symbolic.svg';

function MultimediaPlayer({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(MultimediaPlayerSymbolic)}
    </span>
  );
}

export default MultimediaPlayer;
