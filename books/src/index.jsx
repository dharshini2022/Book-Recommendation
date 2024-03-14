import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Components/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter= createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
{
    path:"/login",
    element: <Login/>
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);

reportWebVitals();