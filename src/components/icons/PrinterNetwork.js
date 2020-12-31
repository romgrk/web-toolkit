import React from "react";
import cx from 'clsx';
import { ReactComponent as PrinterNetworkSymbolic } from '../../assets/icons/printer-network-symbolic.svg';

function PrinterNetwork({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PrinterNetworkSymbolic)}
    </span>
  );
}

export default PrinterNetwork;
