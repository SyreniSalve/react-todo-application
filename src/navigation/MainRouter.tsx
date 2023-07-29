import { Routes, Route } from "react-router-dom";
import TodoItemContainer from "../containers/TodoItemContainer";
import { RouteKey } from "./routes";

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<TodoItemContainer />} path={RouteKey.Todos} />
  </Routes>
);

export default MainRouter;
