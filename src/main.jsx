import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { RouterProvider } from 'react-router'
import {rootRouter} from "./router/router.jsx"

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <RouterProvider router={rootRouter} />
    // <App />
  //</StrictMode>,
)
