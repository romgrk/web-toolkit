import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemSystemSymbolic } from '../../assets/icons/emblem-system-symbolic.svg';

function EmblemSystem({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemSystemSymbolic)}
    </span>
  );
}

export default EmblemSystem;
