import React from "react";
import cx from 'clsx';
import { ReactComponent as AccessoriesTextEditorSymbolic } from '../../assets/icons/accessories-text-editor-symbolic.svg';

function AccessoriesTextEditor({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AccessoriesTextEditorSymbolic)}
    </span>
  );
}

export default AccessoriesTextEditor;
