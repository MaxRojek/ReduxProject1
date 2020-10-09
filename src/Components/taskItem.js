import React from "react";
import { Alert } from 'reactstrap';

const TaskItem = (props) => {
  return (
    
     <Alert color="primary">
              {props.name}
      </Alert>

  );
};

export default TaskItem; 