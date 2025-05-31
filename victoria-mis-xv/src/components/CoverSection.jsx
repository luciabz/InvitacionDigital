const CoverSection = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/imagenes/v (8).jpeg')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-2" data-aos="fade-up">
        <div className="">
          <h1 className="whitespace-nowrap max-w-full text-2xl sm:text-4xl md:text-6xl font-bold tracking-normal font-[Outfit] drop-shadow-[0_2px_16px_rgba(255,255,255,0.9)]">
            V I C T O R I A
          </h1>
        </div>
        <h2 className="text-lg sm:text-xl mt-2 font-[Outfit] drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">MIS XV</h2>
        <p className="mt-4 text-sm sm:text-base tracking-widest font-[Outfit] drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">¡ESTÁS INVITADO!</p>
      </div>
    </section>
  );
};

export default CoverSection;