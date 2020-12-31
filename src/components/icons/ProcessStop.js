import React from "react";
import cx from 'clsx';
import { ReactComponent as ProcessStopSymbolic } from '../../assets/icons/process-stop-symbolic.svg';

function ProcessStop({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ProcessStopSymbolic)}
    </span>
  );
}

export default ProcessStop;
