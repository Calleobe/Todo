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
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4c;
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
