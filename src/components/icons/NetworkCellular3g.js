import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellular3gSymbolic } from '../../assets/icons/network-cellular-3g-symbolic.svg';

function NetworkCellular3g({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellular3gSymbolic)}
    </span>
  );
}

export default NetworkCellular3g;
