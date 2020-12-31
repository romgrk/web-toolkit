import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemSearchSymbolic } from '../../assets/icons/system-search-symbolic.svg';

function SystemSearch({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemSearchSymbolic)}
    </span>
  );
}

export default SystemSearch;
