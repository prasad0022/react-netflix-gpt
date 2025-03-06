import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Browse from "./components/Browse";
import GPTSearch from "./components/GPT/GPTSearch";

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
    {
      path: "/gpt-search",
      element: <GPTSearch />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
