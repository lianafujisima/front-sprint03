import { Outlet } from "react-router-dom";
import './App.css'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import Menu from "./components/Menu";
import WhatsappBotao from "./components/WhatsappBotao";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho/>
      <Menu/>
      <main className="flex-grow">
        <Outlet/>
        <WhatsappBotao/>
      </main>
      <Rodape/>
    </div>
  )
}

export default App