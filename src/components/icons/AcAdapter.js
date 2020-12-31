import React from "react";
import cx from 'clsx';
import { ReactComponent as AcAdapterSymbolic } from '../../assets/icons/ac-adapter-symbolic.svg';

function AcAdapter({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AcAdapterSymbolic)}
    </span>
  );
}

export default AcAdapter;
