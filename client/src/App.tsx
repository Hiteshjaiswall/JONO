import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

const router = createBrowserRouter([
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/signup",
    element: (<Signup/>)
  },
]);
function App() {
  return (
   <>
     <RouterProvider router={router} />
   </>

  );
}

export default App;
