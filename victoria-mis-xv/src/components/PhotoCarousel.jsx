import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const images = [
  'imagenes/vi.jpeg',
  'imagenes/v (2).jpeg',
  'imagenes/v (3).jpeg',
  'imagenes/v (4).jpeg',
  'imagenes/v (5).jpeg',
   
  'imagenes/v (7).jpeg',
  'imagenes/v (8).jpeg',
  
  'imagenes/v (10).jpeg',
  'imagenes/v (11).jpeg',
  'imagenes/v (12).jpeg',
  'imagenes/v (13).jpeg',
  

];

const PhotoCarousel = () => (
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop
    autoplay={{ delay: 1000 }}
    navigation
    pagination={{ clickable: true }}
  >
    {images.map((src, idx) => (
      <SwiperSlide key={idx}>
        <img src={src} alt={`Slide ${idx}`} className="rounded-xl mask-b-from-30%" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default PhotoCarousel;
