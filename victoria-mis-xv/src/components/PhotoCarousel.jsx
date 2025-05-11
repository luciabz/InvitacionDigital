import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'imagenes/sesion1.jpeg',
  'imagenes/sesion2.jpeg',
  'imagenes/sesion3.jpeg',
  'imagenes/sesion4.jpeg',

];

const PhotoCarousel = () => (
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={3}
    loop
    autoplay={{ delay: 3000 }}
    navigation
    pagination={{ clickable: true }}
  >
    {images.map((src, idx) => (
      <SwiperSlide key={idx}>
        <img src={src} alt={`Slide ${idx}`} className="rounded-xl w-full" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default PhotoCarousel;
