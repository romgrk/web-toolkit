import React from "react";
import cx from 'clsx';
import { ReactComponent as EmojiActivitiesSymbolic } from '../../assets/icons/emoji-activities-symbolic.svg';

function EmojiActivities({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmojiActivitiesSymbolic)}
    </span>
  );
}

export default EmojiActivities;
