import React from "react";
import cx from 'clsx';
import { ReactComponent as UtilitiesTerminalSymbolic } from '../../assets/icons/utilities-terminal-symbolic.svg';

function UtilitiesTerminal({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UtilitiesTerminalSymbolic)}
    </span>
  );
}

export default UtilitiesTerminal;
