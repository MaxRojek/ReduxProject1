import React from "react";
import { Spinner } from "reactstrap";

const Loading = (props) => {
  return (
    <div>
      <Spinner style={{ width: "3rem", height: "3rem" }} color="dark" />
    </div>
  );
};

export default Loading; 
