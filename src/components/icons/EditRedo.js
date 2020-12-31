import React from "react";
import cx from 'clsx';
import { ReactComponent as EditRedoSymbolic } from '../../assets/icons/edit-redo-symbolic.svg';

function EditRedo({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditRedoSymbolic)}
    </span>
  );
}

export default EditRedo;
