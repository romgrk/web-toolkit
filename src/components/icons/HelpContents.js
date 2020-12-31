import React from "react";
import cx from 'clsx';
import { ReactComponent as HelpContentsSymbolic } from '../../assets/icons/help-contents-symbolic.svg';

function HelpContents({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(HelpContentsSymbolic)}
    </span>
  );
}

export default HelpContents;
