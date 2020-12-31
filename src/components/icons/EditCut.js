import React from "react";
import cx from 'clsx';
import { ReactComponent as EditCutSymbolic } from '../../assets/icons/edit-cut-symbolic.svg';

function EditCut({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EditCutSymbolic)}
    </span>
  );
}

export default EditCut;
