import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemOkSymbolic } from '../../assets/icons/emblem-ok-symbolic.svg';

function EmblemOk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemOkSymbolic)}
    </span>
  );
}

export default EmblemOk;
