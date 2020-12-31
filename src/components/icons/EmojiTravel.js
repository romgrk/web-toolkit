import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiTravelSymbolic } from '../../assets/icons/emoji-travel-symbolic.svg';

function EmojiTravel({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiTravelSymbolic)}
    </span>
  );
}

export default EmojiTravel;
