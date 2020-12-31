import React from "react";
import cx from 'clsx';
import { ReactComponent as FontXGenericSymbolic } from '../../assets/icons/font-x-generic-symbolic.svg';

function FontXGeneric({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FontXGenericSymbolic)}
    </span>
  );
}

export default FontXGeneric;
