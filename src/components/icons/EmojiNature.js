import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiNatureSymbolic } from '../../assets/icons/emoji-nature-symbolic.svg';

function EmojiNature({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiNatureSymbolic)}
    </span>
  );
}

export default EmojiNature;
