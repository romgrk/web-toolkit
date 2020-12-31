import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiSymbolsSymbolic } from '../../assets/icons/emoji-symbols-symbolic.svg';

function EmojiSymbols({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiSymbolsSymbolic)}
    </span>
  );
}

export default EmojiSymbols;
