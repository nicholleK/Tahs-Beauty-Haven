import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-black dark:text-white" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {(testimonials ?? []).map(
          ({ testimonial, image, href, text }, index) =>
            testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className={`card max-w-sm h-full  bg-white-500/10 backdrop-blur-lg ${
                  !callToAction && href
                    ? 'hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100'
                    : ''
                }`}
              >
                {!callToAction && href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <ItemTestimonial
                      isTestimonialUp={isTestimonialUp}
                      hasDividerLine={true}
                      text={text}
                      image={image}
                      containerClass="h-full"
                      panelClass="justify-between items-stretch w-full h-full"
                      nameJobClass="text-left rtl:text-right"
                      jobClass="text-sm"
                      imageClass="  mr-4 rtl:mr-0 rtl:ml-4 h-[15rem] w-[15rem] rounded-full"
                    />
                  </Link>
                ) : (
                  <ItemTestimonial
                    isTestimonialUp={isTestimonialUp}
                    hasDividerLine={true}
                    text={text}
                    image={image}
                    containerClass="h-full"
                    panelClass="justify-between items-stretch w-full h-full"
                    nameJobClass="text-left rtl:text-right"
                    jobClass="text-sm"
                    imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-[15rem] w-[15rem] rounded-full"
                  />
                )}
              </div>
            ),
        )}
      </div>
    </div>
    {callToAction && (
      <CTA
        callToAction={callToAction}
        containerClass="flex justify-center mx-auto w-fit mt-8 md:mt-12"
        linkClass="btn"
      />
    )}
  </WidgetWrapper>
);

export default Testimonials;
