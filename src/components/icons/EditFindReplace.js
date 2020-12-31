import React from "react";
import cx from 'clsx';
import { ReactComponent as EditFindReplaceSymbolic } from '../../assets/icons/edit-find-replace-symbolic.svg';

function EditFindReplace({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditFindReplaceSymbolic)}
    </span>
  );
}

export default EditFindReplace;
