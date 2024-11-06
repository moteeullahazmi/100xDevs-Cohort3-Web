import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from "../src/routes/root";
import ErrorPage from './error-page';
import Contact from "../src/routes/conctact"



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={router}/>
  </StrictMode>,
)
