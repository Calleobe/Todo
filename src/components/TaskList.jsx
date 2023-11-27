import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import styled from "styled-components";
import { completeAllTasks } from "../reducers/tasks";

const StyledTaskList = styled.div`
  margin: 10px;
`;

const TaskData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const Completed = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Counter = styled.div`
  padding: 10px 20px;
  background-color: #ddd;
  color: black;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 14px;
  font-family: "Helvetica Neue", sans-serif;

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 5px 10px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2193b0;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  font-size: 14px;
  font-family: "Helvetica Neue", sans-serif;
  transition: transform 0.2s ease-in-out, background-color 0.2s;

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 5px 10px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #6dd5ed;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95); /* Subtle click animation */
  }
`;

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const completedTasksCount = tasks.filter((task) => task.complete).length;

  const handleCompleteAll = () => {
    dispatch(completeAllTasks());
  };

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <TaskData>
        <Counter>Total Tasks: {tasks.length}</Counter>
        <Completed>
          <Button onClick={handleCompleteAll}>Complete All</Button>
          <Counter>Completed Tasks: {completedTasksCount}</Counter>
        </Completed>
      </TaskData>
    </StyledTaskList>
  );
};

export default TaskList;
