import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Testimonial } from '~/shared/types';
import DividerLine from './DividerLine';

const ItemTestimonial = ({
  text,
  image,
  isTestimonialUp,
  hasDividerLine,
  containerClass,
  panelClass,
  imageClass,
  dataClass,
}: Testimonial) => {
  return (
    <div className={twMerge(`select-none`, containerClass)}>
      <div className={twMerge(`flex ${isTestimonialUp ? 'flex-col-reverse ' : 'flex-col'}`, panelClass)}>
        {image?.src && image?.alt && (
          <div className={twMerge('flex ', dataClass)}>
            <Image
              src={image.src}
              width={400}
              height={400}
              alt={image.alt}
              className={twMerge('object-cover  shadow-lg bg-gray-500 dark:bg-slate-700', imageClass)}
            />
          </div>
        )}
        {text && <p className="text-black dark:text-white flex flex-col text-center mt-5">{text}</p>}

        {/* {hasDividerLine && <DividerLine />} */}
      </div>
    </div>
  );
};

export default ItemTestimonial;
