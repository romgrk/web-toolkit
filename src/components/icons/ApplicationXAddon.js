import React from "react";
import cx from 'clsx';
import { ReactComponent as ApplicationXAddonSymbolic } from '../../assets/icons/application-x-addon-symbolic.svg';

function ApplicationXAddon({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ApplicationXAddonSymbolic)}
    </span>
  );
}

export default ApplicationXAddon;
