import React from "react";
import cx from 'clsx';
import { ReactComponent as ChatMessageNewSymbolic } from '../../assets/icons/chat-message-new-symbolic.svg';

function ChatMessageNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ChatMessageNewSymbolic)}
    </span>
  );
}

export default ChatMessageNew;
