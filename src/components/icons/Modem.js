import React from "react";
import cx from 'clsx';
import { ReactComponent as ModemSymbolic } from '../../assets/icons/modem-symbolic.svg';

function Modem({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ModemSymbolic)}
    </span>
  );
}

export default Modem;
