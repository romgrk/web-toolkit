import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellular2gSymbolic } from '../../assets/icons/network-cellular-2g-symbolic.svg';

function NetworkCellular2g({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellular2gSymbolic)}
    </span>
  );
}

export default NetworkCellular2g;
