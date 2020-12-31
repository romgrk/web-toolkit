import React from "react";
import cx from 'clsx';
import { ReactComponent as XOfficeSpreadsheetSymbolic } from '../../assets/icons/x-office-spreadsheet-symbolic.svg';

function XOfficeSpreadsheet({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(XOfficeSpreadsheetSymbolic)}
    </span>
  );
}

export default XOfficeSpreadsheet;
