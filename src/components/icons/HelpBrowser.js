import React from "react";
import cx from 'clsx';
import { ReactComponent as HelpBrowserSymbolic } from '../../assets/icons/help-browser-symbolic.svg';

function HelpBrowser({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(HelpBrowserSymbolic)}
    </span>
  );
}

export default HelpBrowser;
