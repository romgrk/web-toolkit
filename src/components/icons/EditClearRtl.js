import React from "react";
import cx from 'clsx';
import { ReactComponent as EditClearRtlSymbolic } from '../../assets/icons/edit-clear-symbolic-rtl.svg';

function EditClearRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditClearRtlSymbolic)}
    </span>
  );
}

export default EditClearRtl;
