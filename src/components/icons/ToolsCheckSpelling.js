import React from "react";
import cx from 'clsx';
import { ReactComponent as ToolsCheckSpellingSymbolic } from '../../assets/icons/tools-check-spelling-symbolic.svg';

function ToolsCheckSpelling({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ToolsCheckSpellingSymbolic)}
    </span>
  );
}

export default ToolsCheckSpelling;
