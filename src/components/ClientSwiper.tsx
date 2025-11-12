// ClientSwiper.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import type { HeroProps } from '~/shared/types';
import Image from 'next/image';
import { Autoplay, EffectCards, EffectCreative, Navigation } from 'swiper/modules';

type ClientSwiperProps = {
  images: HeroProps['image'];
};

export default function ClientSwiper({ images }: ClientSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectCards]}
      effect="cards"
      grabCursor={true}
      direction={'horizontal'}
      slidesPerView={1}
      loop={true}
      navigation={true}
      autoplay={{ delay: 3000, reverseDirection: true, disableOnInteraction: false }}
      className="h-[500px] md:h-[600px] lg:h-[600px]"
    >
      {images?.map((img, i: number) => (
        <SwiperSlide key={i}>
          <Image src={img.src} alt={img.alt} fill className="object-cover" placeholder="blur" priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
