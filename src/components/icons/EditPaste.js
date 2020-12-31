import React from "react";
import cx from 'clsx';
import { ReactComponent as EditPasteSymbolic } from '../../assets/icons/edit-paste-symbolic.svg';

function EditPaste({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditPasteSymbolic)}
    </span>
  );
}

export default EditPaste;
