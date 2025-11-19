'use client';
import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import 'swiper/css';
import ClientSwiper from '../ClientSwiper';
import { motion } from 'motion/react';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image, staticImage, variant }: HeroProps) => {
  if (!title && !subtitle && !tagline && !callToAction && !image && !staticImage && !variant) return null;

  if (variant === 'background' && staticImage) {
    return (
      <section className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center text-center overflow-hidden dark:bg-white">
        {/* background image */}
        <Image
          className="object-cover"
          src={staticImage.src}
          alt="Static Image"
          style={staticImage.style}
          fill
          sizes="100vw"
        ></Image>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 " />

        {/* Text */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto space-y-6">
          {tagline && (
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#3B0270]/20 font-semibold uppercase tracking-wide"
            >
              {tagline}
            </motion.p>
          )}

          {title && (
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-[#e1d1eb]  drop-shadow-lg"
            >
              {title}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 drop-shadow-md"
            >
              {subtitle}
            </motion.p>
          )}

          <div className="flex flex-row sm:flex-row justify-center md:justify-center mt-4 gap-10">
            {callToAction && <CTA callToAction={callToAction} />}
            {callToAction2 && <CTA callToAction={callToAction2} />}
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section
        id="heroOne"
        className="relative  bg-[#B5A8D5]/20 backdrop-blur-lg  dark:bg-slate-900/90 dark:backdrop-blur-md overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-16 md:py-12">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
            {/* Left: Image */}
            <div className="w-full md:w-3/5 flex justify-center md:justify-start ">
              {image && image.length > 0 ? (
                <>
                  <div className="relative w-[800px] h-[400px] md:h-[600px] lg:h-[600px] overflow-hidden rounded-xl">
                    <ClientSwiper images={image ?? []} />
                  </div>
                </>
              ) : staticImage ? (
                <Image
                  className={staticImage.className}
                  src={staticImage.src}
                  alt="Static Image"
                  style={staticImage.style}
                ></Image>
              ) : null}
            </div>

            {/* Right: Text */}
            <div className="w-full text-center md:text-left md:space-y-6 -mt-10 flex flex-col justify-center">
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
