import React from "react";
import cx from 'clsx';
import { ReactComponent as FontSelectSymbolic } from '../../assets/icons/font-select-symbolic.svg';

function FontSelect({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FontSelectSymbolic)}
    </span>
  );
}

export default FontSelect;
