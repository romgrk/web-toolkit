import React from "react";
import cx from 'clsx';
import { ReactComponent as ProcessWorkingSymbolic } from '../../assets/icons/process-working-symbolic.svg';

function ProcessWorking({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ProcessWorkingSymbolic)}
    </span>
  );
}

export default ProcessWorking;
