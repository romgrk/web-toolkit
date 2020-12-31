import React from "react";
import cx from 'clsx';
import { ReactComponent as PrinterWarningSymbolic } from '../../assets/icons/printer-warning-symbolic.svg';

function PrinterWarning({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PrinterWarningSymbolic)}
    </span>
  );
}

export default PrinterWarning;
