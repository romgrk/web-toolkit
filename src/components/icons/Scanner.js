import React from "react";
import cx from 'clsx';
import { ReactComponent as ScannerSymbolic } from '../../assets/icons/scanner-symbolic.svg';

function Scanner({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ScannerSymbolic)}
    </span>
  );
}

export default Scanner;
