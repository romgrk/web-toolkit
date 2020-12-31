import React from "react";
import cx from 'clsx';
import { ReactComponent as PackageXGenericSymbolic } from '../../assets/icons/package-x-generic-symbolic.svg';

function PackageXGeneric({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PackageXGenericSymbolic)}
    </span>
  );
}

export default PackageXGeneric;
