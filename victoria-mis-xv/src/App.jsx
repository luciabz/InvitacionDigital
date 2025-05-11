import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import PhotoCarousel from './components/PhotoCarousel';
import ConfirmarAsistencia from './components/ConfirmarAsistencia';
import CoverSection from './components/CoverSection';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden bg-[#fefdfc] text-[#a88f4d]">
        <Navbar />
        <CoverSection />

        <section id="cuenta-regresiva" className="flex flex-col items-center py-16" data-aos="zoom-in">
          <img src="imagenes/imagen2.jpeg" alt="Cuenta regresiva" className="w-64 mb-8 rounded-lg shadow-lg" />
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-[Outfit]">¡CUENTA REGRESIVA!</h2>
            <div className="text-black text-2xl bg-white px-6 py-4 rounded shadow-lg inline-block font-[Outfit]">
              <CountdownTimer />
            </div>
            <p className="mt-4 text-black font-[Outfit]">
              28 de junio | 20:00 p.m.
              <br />
              Salón Alvear
              <br />
              Av. Corrientes 1998
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.249148169932!2d-55.9042104247589!3d-27.367933376378723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be2fc57b8f53%3A0xa95524fae778f19c!2sSalon%20Alvear!5e0!3m2!1ses-419!2sar!4v1745415564477!5m2!1ses-419!2sar"
              width="300"
              height="200"
              style={{ border: '3px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mx-auto mt-4 rounded-lg shadow"
            ></iframe>
            <a href="#confirmar" className="mt-4 block underline text-sm font-[Outfit]">
              CONFIRMÁ TU ASISTENCIA
            </a>
          </div>
        </section>
<section id="detalles" className="bg-white py-16 text-center" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-8 font-[Outfit]">DETALLES IMPORTANTES</h2>
  <div className="flex flex-col md:flex-row justify-center gap-10 px-4">
    <div>
      <img src="imagenes/image3.jpeg" className="w-64 mx-auto rounded-full" alt="Vestimenta" />
      <p className="mt-2 text-sm text-black font-[Outfit]">VESTIMENTA<br /><strong>¡Elegante!</strong></p>
    </div>
    <div>
      <img src="/imagenes/image4.jpeg" className="w-64 mx-auto rounded-full" alt="Regalo" />
      <p className="mt-2 text-sm text-black font-[Outfit]">
        TRAE UN REGALO<br />
        <strong>CBU: 0000003100022159144965</strong><br />
        <strong>Alias: aliasUsuario</strong>
      </p>
      <p className="mt-4 text-center font-[Outfit] underline">
        <a href="https://www.mercadopago.com.ar/" target="_blank" rel="noopener noreferrer">ENVIAR REGALO!</a>
      </p>
    </div>
  </div>
</section>

<section className="py-16" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center mb-6 font-[Outfit]">COMPARTE TUS FOTOS!</h2>
  <div className="max-w-2xl mx-auto text-black px-4 font-[Outfit]">
    <p className="font-bold">¡Compartí tus recuerdos de esta noche mágica!</p>
    <p className="mt-2">Queremos que esta celebración quede grabada para siempre, y vos sos parte de eso.</p>
    <p className="mt-2">Subí tus fotos y videos a nuestra carpeta compartida.</p>
    <p className="mt-2">El día del evento vas a poder escanear este código QR para acceder a todas las fotos:</p>
    <div className="flex justify-center mt-4">
      <img src="/imagenes/image.png" alt="QR" className="w-40" />
    </div>
    <p className="mt-4 text-center underline">
      <a href="https://drive.google.com/drive/folders/1k6OeK7qU6lpKkbj2yRjXKwlHPlimQH7x?usp=drive_link" target="_blank" rel="noopener noreferrer">ENVIÁLAS AQUÍ</a>
    </p>
  </div>
</section>
        <section className="bg-[#fefdfc] py-16 text-center" data-aos="fade-up">
       
          <p className="mb-4 text-black font-[Outfit]">¡Gracias por ser parte de este día tan especial!</p>
          <p className="mb-4 text-black font-[Outfit]">¡Esperamos que lo disfrutes!</p>
          <p className="mb-4 text-black font-[Outfit]">¡Nos vemos pronto!</p>
          <p className="mb-4 text-black font-[Outfit]">¡Con amor, Victoria!</p>
          </section> 
        <section id="fotos" className="py-20 text-center" data-aos="fade-up">
          <PhotoCarousel />
        </section>
        <ConfirmarAsistencia />
      </div>
    </>
  )
}

export default App;
