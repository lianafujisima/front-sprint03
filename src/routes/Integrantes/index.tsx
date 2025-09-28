import FotoLeticia from "../../assets/images/fotoleticia.jpeg";
import FotoLiana from "../../assets/images/fotoliana.jpeg";
import FotoVictor from "../../assets/images/fotovictor.jpeg";

export default function Integrantes(){
    return(
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Integrantes</h1>
            <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                <div  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                    <img src={FotoLeticia} alt="Foto Leticia Santiago" className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-4"/>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-semibold text-gray-800">Letícia Santiago e Silva</p>
                        <p className="text-gray-600">RM 565799</p>
                        <p className="text-gray-700">Linkedin: <a href="" className="text-blue-600 hover:underline">Letícia Santiago e Silva</a></p>
                        <p className="text-gray-700">Github: <a href="https://github.com/santiago-leticia" target="_blank" className="text-blue-600 hover:underline">Leticia Santiago e Silva</a></p>
                    </div>
                </div>
                <div>
                    <img src={FotoLiana} alt="Foto Liana Fujisima"/>
                    <div>
                        <p>Liana Lyumi Morisita Fujisima</p>
                        <p>RM 565698</p>
                        <p>Linkedin: <a href="https://www.linkedin.com/in/liana-lyumi-morisita-fujisima-22368a367/" target="_blank">Liana Lyumi Morisita Fujisima</a></p>
                        <p>Github: <a href="https://github.com/lianafujisima" target="_blank">Liana Lyumi Morisita Fujisima</a></p>
                    </div>
                </div>
                <div>
                    <img src={FotoVictor} alt="Foto Victor Cho"/>
                    <div>
                        <p>Victor Willian Hwan Cho</p>
                        <p>RM 565382</p>
                        <p>Linkedin: <a href="https://www.linkedin.com/in/victor-cho-91a508367?trk=contact-info" target="_blank">Victor Willian Hwan Cho</a></p>
                        <p>Github: <a href="https://github.com/Victorcho05" target="_blank">Victor Willian Hwan Cho</a></p>
                    </div>
                </div>
            </section>
        </main>
    )
}