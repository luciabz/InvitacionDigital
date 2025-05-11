import { useDispatch, useSelector } from 'react-redux';
import { setNombre, setAsistencia, setMensaje, mostrarMensaje, resetFormulario } from '../redux/rsvpSlice';

function ConfirmAttendance() {
  const dispatch = useDispatch();
  const { nombre, asistencia, mensaje, mensajeVisible } = useSelector((state) => state.rsvp);

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
          dispatch(mostrarMensaje());
          dispatch(resetFormulario());
        }
      })
      .catch((error) => console.error('Error al enviar el formulario:', error));
  };

  return (
    <section id="confirmar" className="bg-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/50">
        <form onSubmit={handleSubmit} name="contact-form" className="max-w-xl mx-auto space-y-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-6 font-[Outfit]">CONFIRMA TU ASISTENCIA!</h2>

          <div>
            <label htmlFor="nombre" className="block mb-1 font-[Outfit]">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full border shadow-lg rounded px-3 py-2"
              value={nombre}
              onChange={(e) => dispatch(setNombre(e.target.value))}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-[Outfit]">¿Vas a asistir?</label>
            <div className="flex gap-4 items-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="asistencia"
                  value="si"
                  checked={asistencia === 'si'}
                  onChange={(e) => dispatch(setAsistencia(e.target.value))}
                /> Sí
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="asistencia"
                  value="no"
                  checked={asistencia === 'no'}
                  onChange={(e) => dispatch(setAsistencia(e.target.value))}
                /> No
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-1 font-[Outfit]">¿Qué música no puede faltar?</label>
            <input
              type="text"
              id="mensaje"
              name="mensaje"
              className="w-full border shadow-lg rounded px-3 py-2"
              value={mensaje}
              onChange={(e) => dispatch(setMensaje(e.target.value))}
            />
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
