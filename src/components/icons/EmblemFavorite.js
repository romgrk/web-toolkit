import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemFavoriteSymbolic } from '../../assets/icons/emblem-favorite-symbolic.svg';

function EmblemFavorite({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemFavoriteSymbolic)}
    </span>
  );
}

export default EmblemFavorite;
