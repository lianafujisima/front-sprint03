import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-8xl font-bold text-center text-red-600 pb-14">Página não encontrada! Erro 404</h1>
            <Link to="/"
                className="bg-green-400 text-red-600 px-10 py-8 rounded hover:bg-green-800 transition p-7 text-4xl">Voltar para Home
            </Link>
        </div>
    )
}