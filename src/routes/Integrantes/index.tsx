import FotoLeticia from "../../assets/images/fotoleticia.jpeg";
import FotoLiana from "../../assets/images/fotoliana.jpeg";
import FotoVictor from "../../assets/images/fotovictor.jpeg";

export default function Integrantes(){
    return(
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            <h1 className="text-emerald-800 text-5xl text-center font-bold mb-8">Integrantes</h1>
            <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                <div  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                    <img src={FotoLeticia} alt="Foto Leticia Santiago" className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-4"/>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-semibold text-gray-800">Letícia Santiago e Silva</p>
                        <p className="text-gray-600">RM 565799</p>
                        <p className="text-gray-600">Turma: 1TDSPI</p>
                        <p className="text-gray-700">Linkedin: <a href="http://linkedin.com/in/leticia-santiago-6b9219354" target="_blank" className="text-blue-600 hover:underline">Letícia Santiago e Silva</a></p>
                        <p className="text-gray-700">Github: <a href="https://github.com/santiago-leticia" target="_blank" className="text-blue-600 hover:underline">Leticia Santiago e Silva</a></p>
                    </div>
                </div>
                <div  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                    <img src={FotoLiana} alt="Foto Liana Fujisima" className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-4"/>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-semibold text-gray-800">Liana Lyumi Morisita Fujisima</p>
                        <p className="text-gray-600">RM 565698</p>
                        <p className="text-gray-600">Turma: 1TDSPI</p>
                        <p className="text-gray-700">Linkedin: <a href="https://www.linkedin.com/in/liana-lyumi-morisita-fujisima-22368a367/" target="_blank" className="text-blue-600 hover:underline">Liana Lyumi Morisita Fujisima</a></p>
                        <p className="text-gray-700">Github: <a href="https://github.com/lianafujisima" target="_blank" className="text-blue-600 hover:underline">Liana Lyumi Morisita Fujisima</a></p>
                    </div>
                </div>
                <div  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                    <img src={FotoVictor} alt="Foto Victor Cho" className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-4"/>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-semibold text-gray-800">Victor Willian Hwan Cho</p>
                        <p className="text-gray-600">RM 565382</p>
                        <p className="text-gray-600">Turma: 1TDSPI</p>
                        <p className="text-gray-700">Linkedin: <a href="https://www.linkedin.com/in/victor-cho-91a508367?trk=contact-info" target="_blank" className="text-blue-600 hover:underline">Victor Willian Hwan Cho</a></p>
                        <p className="text-gray-700">Github: <a href="https://github.com/Victorcho05" target="_blank" className="text-blue-600 hover:underline">Victor Willian Hwan Cho</a></p>
                    </div>
                </div>
            </section>
        </main>
    )}