const CoverSection = () => {
  return (
    <section
      id="inicio"
  className="relative h-screen w-full bg-cover bg-center"
  style={{ backgroundImage: "url('/imagenes/fondo.jpeg')" }}
>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4" data-aos="fade-up">
    <h1 className="text-5xl font-bold tracking-widest relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/30 before:to-white/5 before:blur-sm before:animate-pulse font-[Outfit]">
      V I C T O R I A
    </h1>
    <h2 className="text-3xl mt-2 font-[Outfit]">MIS XV</h2>
    <p className="mt-4 text-lg tracking-widest font-[Outfit]">¡ESTÁS INVITADO!</p>
  </div>
    </section>
  );
};

export default CoverSection;
