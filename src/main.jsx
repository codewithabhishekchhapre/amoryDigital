import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import AdSpendCalculator from './pages/AdSpendCalculator.jsx'
import NotFound from './components/NotFound .jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Landing/>}/>
      <Route path='/adSpendCalculator' element={<AdSpendCalculator/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
