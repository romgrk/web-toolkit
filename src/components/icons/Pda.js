import React from "react";
import cx from 'clsx';
import { ReactComponent as PdaSymbolic } from '../../assets/icons/pda-symbolic.svg';

function Pda({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PdaSymbolic)}
    </span>
  );
}

export default Pda;
