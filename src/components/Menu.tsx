import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <nav className="menu text-2xl text-slate-300 text-center flex space-x-8 font-semibold bg-emerald-600">
            <Link to={'/'} className='m-2'>Home</Link>
            <Link to={'/sobre'} className='m-2'>Sobre</Link>
            <Link to={'/contato'} className='m-2'>Contato</Link>
            <Link to={'/faq'} className='m-2'>FAQ</Link>
            <Link to={'/integrantes'} className='m-2'>Integrantes</Link>
            <Link to={'/whatsapp'} className='m-2'>Whatsapp</Link>
            <Link to={'/notificacaowhatsapp'} className='m-2'>Notificação Whatsapp</Link>
        </nav>
    )
}