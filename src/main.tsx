import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import FaqWhatsapp from './routes/FaqWhatsapp/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import FormAgendamento from './routes/FormAgendamento/index.tsx'
import ListaAgendamento from './routes/ListaAgendamento/index.tsx'
import NotificacaoWhatsapp from './routes/NotificacaoWhatsapp/index.tsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:"/", element:<Home/>,},
    {path:'/sobre', element:<Sobre/>},
    {path:'/contato', element:<Contato/>},
    {path:'/faq', element:<Faq/>},
    {path:'/faqwhatsapp', element:<FaqWhatsapp/> },
    {path:'/integrantes', element:<Integrantes/>},
    {path:'/agendamento', element:<ListaAgendamento/>},
    {path:'/incluir', element:<FormAgendamento/>},
    {path:'/editar/:id', element:<FormAgendamento/>},
    {path:"/notificacaowhatsapp", element:<NotificacaoWhatsapp/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)