import React from "react";
import cx from 'clsx';
import { ReactComponent as ChangesAllowSymbolic } from '../../assets/icons/changes-allow-symbolic.svg';

function ChangesAllow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ChangesAllowSymbolic)}
    </span>
  );
}

export default ChangesAllow;
