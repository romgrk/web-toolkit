import React from "react";
import cx from 'clsx';
import { ReactComponent as ActionUnavailableSymbolic } from '../../assets/icons/action-unavailable-symbolic.svg';

function ActionUnavailable({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ActionUnavailableSymbolic)}
    </span>
  );
}

export default ActionUnavailable;
