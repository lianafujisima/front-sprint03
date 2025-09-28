import FotoLeticia from "../../assets/images/fotoleticia.jpeg";


export default function Integrantes(){
    return(
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Integrantes</h1>
            <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                <div>
                    <img src={FotoLeticia} alt="Foto Leticia Santiago"/>
                    <div>
                        <p>Letícia Santiago e Silva</p>
                        <p>RM 565799</p>
                        <p>Linkedin: <a href="" className="text-blue-600 hover:underline">Letícia Santiago e Silva</a></p>
                        <p>Github: <a href="https://github.com/santiago-leticia" target="_blank">Leticia Santiago e Silva</a></p>
                    </div>
                </div>
            </section>
        </main>
    )
}