import React from "react";
import cx from 'clsx';
import { ReactComponent as ContentLoadingSymbolic } from '../../assets/icons/content-loading-symbolic.svg';

function ContentLoading({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ContentLoadingSymbolic)}
    </span>
  );
}

export default ContentLoading;
