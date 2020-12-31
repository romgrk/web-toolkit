import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiPeopleSymbolic } from '../../assets/icons/emoji-people-symbolic.svg';

function EmojiPeople({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiPeopleSymbolic)}
    </span>
  );
}

export default EmojiPeople;
