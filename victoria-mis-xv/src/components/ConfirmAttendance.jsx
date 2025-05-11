import { useState } from "react";

function ConfirmAttendance() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbybWFJE6OIut7-3JXgLLfNcf3Btmb0EFAIJMnI3awM-XenOWauSU-N3hgvWMHd-iGGuOw/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          form.classList.add("hidden"); 
          setMensajeVisible(true); 
        }
      })
      .catch((error) => console.error('Error al enviar el formulario:', error));
  };

  return (
    <section id="confirmar" className="bg-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/50">
        <form onSubmit={handleSubmit} method="post" action="" name="contact-form" className="max-w-xl mx-auto space-y-4 text-black">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 font-[Outfit]">CONFIRMA TU ASISTENCIA!</h2>

            <label htmlFor="nombre" className="block mb-1  font-[Outfit]">Nombre</label>
            <input type="text" id="nombre" name="nombre" className="w-full border shadow-lg rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block  mb-1 font-[Outfit]">¿Vas a asistir?</label>
            <div className="flex gap-4 items-center">
              <label className="inline-flex items-center">
                <input type="radio" name="asistencia" value="si" className="mr-2" /> Sí
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="asistencia" value="no" className="mr-2" /> No
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="mensaje" className="block mb-1  font-[Outfit]">¿Qué música no puede faltar?</label>
            <input type="text" id="mensaje" name="mensaje" className="w-full border shadow-lg rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-[#a88f4d] text-white px-6 py-2 rounded shadow mt-4 hover:bg-[#917b3e] font-[Outfit]">Enviar</button>
        </form>
      </div>
      
      {mensajeVisible && (
        <p className="text-center text-green-600 font-semibold mt-4 font-[Outfit]">
          ¡Gracias por confirmar tu asistencia!
        </p>
      )}
    </section>
  );
}

export default ConfirmAttendance;
