import React from "react";
import cx from 'clsx';
import { ReactComponent as PrinterErrorSymbolic } from '../../assets/icons/printer-error-symbolic.svg';

function PrinterError({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PrinterErrorSymbolic)}
    </span>
  );
}

export default PrinterError;
