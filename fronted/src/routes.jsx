import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import TaskListPage from "./pages/TaskListPage";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "tasks", element: <TaskListPage /> },
      { path: "categories", element: <CategoryPage /> },
    ],
  },
]);

export default router;
