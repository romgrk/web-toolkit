import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemPhotosSymbolic } from '../../assets/icons/emblem-photos-symbolic.svg';

function EmblemPhotos({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemPhotosSymbolic)}
    </span>
  );
}

export default EmblemPhotos;
