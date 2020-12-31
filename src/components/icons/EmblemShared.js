import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemSharedSymbolic } from '../../assets/icons/emblem-shared-symbolic.svg';

function EmblemShared({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemSharedSymbolic)}
    </span>
  );
}

export default EmblemShared;
