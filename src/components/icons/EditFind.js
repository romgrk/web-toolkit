import React from "react";
import cx from 'clsx';
import { ReactComponent as EditFindSymbolic } from '../../assets/icons/edit-find-symbolic.svg';

function EditFind({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditFindSymbolic)}
    </span>
  );
}

export default EditFind;
