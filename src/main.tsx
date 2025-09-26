import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import FaqContato from './routes/FaqContato/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Whatsapp from './routes/Whatsapp/index.tsx'
import NotificacaoWhatsapp from './routes/NotificacaoWhatsapp/index.tsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:"/", element:<Home/>,},
    {path:'/sobre', element:<Sobre/>},
    {path:'/faqcontato', element:<FaqContato/>},
    {path:'/integrantes', element:<Integrantes/>},
    {path:"/whatsapp", element:<Whatsapp/>,},
    {path:"/notificacaowhatsapp", element:<NotificacaoWhatsapp/>,}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)