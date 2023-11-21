import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../reducers/tasks";

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  margin-top 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  transition: all 0.3s;

  background-color: ${(props) => (props.$complete ? "#dff0d8" : "white")};
`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const Text = styled.span`
  flex: 1;
  word-break: break-all; /* Break long words */
  overflow-wrap: break-word; /* For a more natural word break */
`;

const DeleteButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c9302c;
  }
`;

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <TaskContainer $complete={task.complete}>
      <Checkbox
        type="checkbox"
        checked={task.complete}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </TaskContainer>
  );
};

export default TaskItem;
