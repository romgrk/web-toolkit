import React from "react";
import cx from 'clsx';
import { ReactComponent as TextXGenericSymbolic } from '../../assets/icons/text-x-generic-symbolic.svg';

function TextXGeneric({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TextXGenericSymbolic)}
    </span>
  );
}

export default TextXGeneric;
