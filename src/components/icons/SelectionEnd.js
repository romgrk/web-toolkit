import React from "react";
import cx from 'clsx';
import { ReactComponent as SelectionEndSymbolic } from '../../assets/icons/selection-end-symbolic.svg';

function SelectionEnd({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SelectionEndSymbolic)}
    </span>
  );
}

export default SelectionEnd;
