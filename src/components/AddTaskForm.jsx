import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2193b0;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  font-size: 16px;
  font-family: "Helvetica Neue", sans-serif;
  transition: transform 0.2s ease-in-out, background-color 0.2s;

  &:hover {
    background-color: #6dd5ed;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95); /* Subtle click animation */
  }
`;

const AddTaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask({ id: Date.now(), text, complete: false }));
    setText("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button type="submit">Add</Button>
      </Form>
    </Container>
  );
};

export default AddTaskForm;
