import { Routes, Route } from "react-router-dom";
import TodoListContainer from "../containers/TodoListContainer";
import { RouteKey } from "./routes";
import TodoAddFormContainer from "../containers/TodoAddFormContainer/TodoAddFormContiner";
import TodoEditFormContainer from "../containers/TodoEditFormContainer/TodoEditFormContainer";

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<TodoListContainer />} path={RouteKey.Todos} />
    <Route element={<TodoAddFormContainer />} path={RouteKey.Add} />
    <Route element={<TodoEditFormContainer />} path={RouteKey.Edit} />
  </Routes>
);

export default MainRouter;
