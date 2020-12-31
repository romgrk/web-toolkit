import React from "react";
import cx from 'clsx';
import { ReactComponent as TextEditorSymbolic } from '../../assets/icons/text-editor-symbolic.svg';

function TextEditor({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TextEditorSymbolic)}
    </span>
  );
}

export default TextEditor;
