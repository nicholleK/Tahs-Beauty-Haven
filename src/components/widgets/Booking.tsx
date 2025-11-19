import Form from '../common/Form';
import Headline from '../common/Headline';
import { BookingProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Image from 'next/image';
import Calendly from '../Calendly';
import Cal from '../Cal';
import colorful from '~/assets/images/colorful.jpg';

const Contact = ({ header, id, title, image, hasBackground }: BookingProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center max-w-full">
      <div className={'grid-cols-1'}>
        {/* Calender embed */}
        <div className="md:max-w-full flex flex-col items-center justify-center">
          {image && (
            <section className="min-h-screen w-full flex flex-col md:flex-row items-center p-6 bg-[#C5B0CD]/100 dark:bg-white gap-8">
              {/* Left column - Text */}
              <div className="flex flex-col justify-center items-center mt-0 w-full md:w-2/5 text-center">
                <h3 className="text-3xl font-bold mb-4 text-left dark:text-black">Your Style Awaits...</h3>

                <p className="text-lg text-center dark:text-black max-w-md">
                  Book your appointment easily and get started on your style journey.
                </p>
              </div>

              {/* Right column - Calendar */}
              <div className="w-full  md:w-3/5">
                <Cal
                  calLink="tah-s-beauty-haven/hair-appointment"
                  config={{ layout: 'month-view', hideEventTypeDetails: false }}
                  height={700}
                  style={{ width: '100%' }}
                />
              </div>
            </section>
          )}
        </div>
        {/* <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" /> */}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
