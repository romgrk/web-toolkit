import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiFlagsSymbolic } from '../../assets/icons/emoji-flags-symbolic.svg';

function EmojiFlags({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiFlagsSymbolic)}
    </span>
  );
}

export default EmojiFlags;
