import React from "react";
import cx from 'clsx';
import { ReactComponent as TaskDueSymbolic } from '../../assets/icons/task-due-symbolic.svg';

function TaskDue({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TaskDueSymbolic)}
    </span>
  );
}

export default TaskDue;
