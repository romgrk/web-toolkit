import React from "react";
import cx from 'clsx';
import { ReactComponent as InsertTextSymbolic } from '../../assets/icons/insert-text-symbolic.svg';

function InsertText({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InsertTextSymbolic)}
    </span>
  );
}

export default InsertText;
