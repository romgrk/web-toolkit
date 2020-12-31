import React from "react";
import cx from 'clsx';
import { ReactComponent as EditSelectAllSymbolic } from '../../assets/icons/edit-select-all-symbolic.svg';

function EditSelectAll({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditSelectAllSymbolic)}
    </span>
  );
}

export default EditSelectAll;
