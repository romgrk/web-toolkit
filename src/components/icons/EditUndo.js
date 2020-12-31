import React from "react";
import cx from 'clsx';
import { ReactComponent as EditUndoSymbolic } from '../../assets/icons/edit-undo-symbolic.svg';

function EditUndo({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditUndoSymbolic)}
    </span>
  );
}

export default EditUndo;
