import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasks";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    padding: 20px;
    background-color: #f8f8f8;
    margin: 0 auto; 
  }

  @media (max-width: 600px) {
    body {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    body {
      width: 60%;
    }
  }

  @media (min-width: 1024px) {
    body {
      width: 70%;
    }
  }
  
  @media (min-width: 1200px) {
    body {
      width: 80%;
    }
  }
`;

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
        <AddTaskForm />
        <TaskList />
    </Provider>
  );
};

export default App;
