import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { addTask } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Formulage = (props) => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <FormGroup>
        <Label for="exampleEmail">Task title</Label>
        <Input
          onChange={(e) => setTaskName(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="task name"
        />
      </FormGroup>
      <Button onClick={() => dispatch(addTask(taskName))} outline color="primary">
        Add
      </Button>
    </>
  );
};

export default Formulage;
