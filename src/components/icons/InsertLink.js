import React from "react";
import cx from 'clsx';
import { ReactComponent as InsertLinkSymbolic } from '../../assets/icons/insert-link-symbolic.svg';

function InsertLink({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(InsertLinkSymbolic)}
    </span>
  );
}

export default InsertLink;
