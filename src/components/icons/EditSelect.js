import React from "react";
import cx from 'clsx';
import { ReactComponent as EditSelectSymbolic } from '../../assets/icons/edit-select-symbolic.svg';

function EditSelect({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditSelectSymbolic)}
    </span>
  );
}

export default EditSelect;
