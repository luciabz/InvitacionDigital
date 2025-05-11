import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/imagenes/fondo.jpeg',
  '/imagenes/image.png',
  '/imagenes/image3.jpeg',
  '/imagenes/image4.jpeg',
  '/imagenes/imagen2.jpeg',
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
