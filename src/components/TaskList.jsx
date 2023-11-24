import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const StyledTaskList = styled.div`
  margin: 10px;
`;

const TaskData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasksCount = tasks.filter((task) => task.complete).length;

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <TaskData>
        <div>Total Tasks: {tasks.length}</div>
        <div>Completed Tasks: {completedTasksCount}</div>
      </TaskData>
    </StyledTaskList>
  );
};

export default TaskList;
