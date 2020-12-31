import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiBodySymbolic } from '../../assets/icons/emoji-body-symbolic.svg';

function EmojiBody({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiBodySymbolic)}
    </span>
  );
}

export default EmojiBody;
