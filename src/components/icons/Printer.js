import React from "react";
import cx from 'clsx';
import { ReactComponent as PrinterSymbolic } from '../../assets/icons/printer-symbolic.svg';

function Printer({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PrinterSymbolic)}
    </span>
  );
}

export default Printer;
