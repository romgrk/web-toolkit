import React from "react";
import cx from 'clsx';
import { ReactComponent as XOfficeDrawingSymbolic } from '../../assets/icons/x-office-drawing-symbolic.svg';

function XOfficeDrawing({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(XOfficeDrawingSymbolic)}
    </span>
  );
}

export default XOfficeDrawing;
