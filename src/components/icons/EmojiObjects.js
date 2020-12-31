import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiObjectsSymbolic } from '../../assets/icons/emoji-objects-symbolic.svg';

function EmojiObjects({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiObjectsSymbolic)}
    </span>
  );
}

export default EmojiObjects;
