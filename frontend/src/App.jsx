import { RouterProvider, createRouter } from "@tanstack/react-router";

import Error404notFound from "./components/notFound/Error404notFound.jsx";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return (
      <div>
        <Error404notFound />
      </div>
    );
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
