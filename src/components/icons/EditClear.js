import React from "react";
import cx from 'clsx';
import { ReactComponent as EditClearSymbolic } from '../../assets/icons/edit-clear-symbolic.svg';

function EditClear({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditClearSymbolic)}
    </span>
  );
}

export default EditClear;
