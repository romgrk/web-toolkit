import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiRecentSymbolic } from '../../assets/icons/emoji-recent-symbolic.svg';

function EmojiRecent({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiRecentSymbolic)}
    </span>
  );
}

export default EmojiRecent;
