import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemSynchronizingSymbolic } from '../../assets/icons/emblem-synchronizing-symbolic.svg';

function EmblemSynchronizing({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemSynchronizingSymbolic)}
    </span>
  );
}

export default EmblemSynchronizing;
