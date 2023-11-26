import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../reducers/tasks";

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.$complete ? "#6dd5ed" : "#fff")};
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const Text = styled.span`
  flex: 1;
  word-break: break-all;
  overflow-wrap: break-word;
`;

const DeleteButton = styled.button`
  background-color: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff9000;
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
