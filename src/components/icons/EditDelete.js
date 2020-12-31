import React from "react";
import cx from 'clsx';
import { ReactComponent as EditDeleteSymbolic } from '../../assets/icons/edit-delete-symbolic.svg';

function EditDelete({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditDeleteSymbolic)}
    </span>
  );
}

export default EditDelete;
