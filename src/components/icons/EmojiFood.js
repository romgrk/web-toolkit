import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiFoodSymbolic } from '../../assets/icons/emoji-food-symbolic.svg';

function EmojiFood({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiFoodSymbolic)}
    </span>
  );
}

export default EmojiFood;
