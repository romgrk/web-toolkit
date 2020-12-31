import React from "react";
import cx from 'clsx';
import { ReactComponent as EmoteLoveSymbolic } from '../../assets/icons/emote-love-symbolic.svg';

function EmoteLove({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmoteLoveSymbolic)}
    </span>
  );
}

export default EmoteLove;
