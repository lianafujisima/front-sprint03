import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Importa seus estilos globais
import App from './App.tsx' // Componente principal da aplicação (Layout)
 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importa todos os componentes de rota (Páginas)
import Home from './routes/Home/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Whatsapp from './routes/Whatsapp/index.tsx'
import NotificacaoWhatsapp from './routes/NotificacaoWhatsapp/index.tsx'
import Error from './routes/Error/index.tsx'
import CriarContaPage from './routes/CriarConta/index.tsx' // A página contêiner do cadastro
 
// 1. Definição do Objeto de Roteamento
const router = createBrowserRouter([{
  path:'/',
  element:<App/>, // Elemento pai que contém o <Outlet/> para renderizar os filhos
  errorElement:<Error/>,
  children:[
    {path:"/", element:<Home/>,},
    {path:'/sobre', element:<Sobre/>},
    {path:'/contato', element:<Contato/>},
    {path:'/faq', element:<Faq/>},
    {path:'/integrantes', element:<Integrantes/>},
   
    {path:'/whatsapp', element:<Whatsapp/>},
    {path:'/incluir', element:<CriarContaPage/>},
    {path:'/editar/:id', element:<Whatsapp/>}, // Exemplo de rota dinâmica
    {path:"/notificacaowhatsapp", element:<NotificacaoWhatsapp/>},
    {path:"/cadastro",element:<CriarContaPage/>}, // Opção 2: Usando /cadastro (o contêiner)
  ]
}])
 
// 2. Montagem da Aplicação no DOM
createRoot(document.getElementById('root')!).render(
<StrictMode>
  <RouterProvider router={router} />
</StrictMode>,
)