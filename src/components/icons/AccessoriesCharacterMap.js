import React from "react";
import cx from 'clsx';
import { ReactComponent as AccessoriesCharacterMapSymbolic } from '../../assets/icons/accessories-character-map-symbolic.svg';

function AccessoriesCharacterMap({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AccessoriesCharacterMapSymbolic)}
    </span>
  );
}

export default AccessoriesCharacterMap;
