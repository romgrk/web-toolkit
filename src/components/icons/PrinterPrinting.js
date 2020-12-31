import React from "react";
import cx from 'clsx';
import { ReactComponent as PrinterPrintingSymbolic } from '../../assets/icons/printer-printing-symbolic.svg';

function PrinterPrinting({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PrinterPrintingSymbolic)}
    </span>
  );
}

export default PrinterPrinting;
