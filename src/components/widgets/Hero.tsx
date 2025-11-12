import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ClientSwiper from '../ClientSwiper';
import DividerLine from '../common/DividerLine';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image, staticImage }: HeroProps) => {
  return (
    <>
      <section
        id="heroOne"
        className="relative  bg-[#B5A8D5]/20 backdrop-blur-lg  dark:bg-slate-900/90 dark:backdrop-blur-md overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-16 md:py-12">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
            {/* Left: Image */}
            <div className="w-full md:w-3/5 flex justify-center md:justify-start">
              <div className="relative w-[800px] h-[400px] md:h-[600px] lg:h-[600px] overflow-hidden rounded-xl">
                {image && (
                  <>
                    <ClientSwiper images={image ?? []} />
                  </>
                )}

                {staticImage && (
                  <div>
                    <Image
                      className="md:max-h-screen object-fill lg:h-[600px]"
                      src={staticImage.src}
                      alt="Static Image"
                    ></Image>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full text-center md:text-left md:space-y-6  md:mt-10 lg:mt-5 flex flex-col justify-center">
              {tagline && (
                <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">{title}</h1>
              )}
              {subtitle && <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md">{subtitle}</p>}
              <div className="flex flex-row sm:flex-row justify-center md:justify-center mt-4 gap-10">
                {callToAction && <CTA callToAction={callToAction} />}
                {callToAction2 && <CTA callToAction={callToAction2} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <DividerLine /> */}
    </>
  );
};

export default Hero;
