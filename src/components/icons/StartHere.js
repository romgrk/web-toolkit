import React from "react";
import cx from 'clsx';
import { ReactComponent as StartHereSymbolic } from '../../assets/icons/start-here-symbolic.svg';

function StartHere({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(StartHereSymbolic)}
    </span>
  );
}

export default StartHere;
