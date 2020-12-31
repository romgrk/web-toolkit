import React from "react";
import cx from 'clsx';
import { ReactComponent as EditCopySymbolic } from '../../assets/icons/edit-copy-symbolic.svg';

function EditCopy({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditCopySymbolic)}
    </span>
  );
}

export default EditCopy;
