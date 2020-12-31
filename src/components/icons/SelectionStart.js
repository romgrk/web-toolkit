import React from "react";
import cx from 'clsx';
import { ReactComponent as SelectionStartSymbolic } from '../../assets/icons/selection-start-symbolic.svg';

function SelectionStart({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SelectionStartSymbolic)}
    </span>
  );
}

export default SelectionStart;
