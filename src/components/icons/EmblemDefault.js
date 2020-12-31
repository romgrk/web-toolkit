import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemDefaultSymbolic } from '../../assets/icons/emblem-default-symbolic.svg';

function EmblemDefault({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemDefaultSymbolic)}
    </span>
  );
}

export default EmblemDefault;
