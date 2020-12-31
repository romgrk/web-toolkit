import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationRssXmlSymbolic } from '../../assets/icons/application-rss+xml-symbolic.svg';

function ApplicationRssXml({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationRssXmlSymbolic)}
    </span>
  );
}

export default ApplicationRssXml;
