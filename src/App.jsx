import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
