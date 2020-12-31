import React from "react";
import cx from 'clsx';
import { ReactComponent as EditClearAllSymbolic } from '../../assets/icons/edit-clear-all-symbolic.svg';

function EditClearAll({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditClearAllSymbolic)}
    </span>
  );
}

export default EditClearAll;
