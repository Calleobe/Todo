import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const StyledTaskList = styled.div`
  margin-left: 30px;
  margin-bottom: 10px;
`;

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasksCount = tasks.filter((task) => task.complete).length;

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <div>Total number of Tasks: {tasks.length}</div>
      <div>Completed Tasks: {completedTasksCount}</div>
    </StyledTaskList>
  );
};

export default TaskList;
