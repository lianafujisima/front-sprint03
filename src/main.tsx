import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.tsx'
 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Whatsapp from './routes/Whatsapp/index.tsx'
import NotificacaoWhatsapp from './routes/NotificacaoWhatsapp/index.tsx'
import Error from './routes/Error/index.tsx'
import CriarContaPage from './routes/CriarContaPage/index.tsx'
 
const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {path:"/", element:<Home/>,},
    {path:'/sobre', element:<Sobre/>},
    {path:'/contato', element:<Contato/>},
    {path:'/faq', element:<Faq/>},
    {path:'/integrantes', element:<Integrantes/>},
   
    {path:'/whatsapp', element:<Whatsapp/>},
    {path:'/incluir', element:<CriarContaPage/>},
    {path:'/editar/:id', element:<Whatsapp/>}, 
    {path:"/notificacaowhatsapp", element:<NotificacaoWhatsapp/>},
    {path:"/cadastro",element:<CriarContaPage/>},
  ]
}])
 
createRoot(document.getElementById('root')!).render(
<StrictMode>
  <RouterProvider router={router} />
</StrictMode>,
)