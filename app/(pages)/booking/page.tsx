import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features4 from '~/components/widgets/Features4';
import Booking from '~/components/widgets/Booking';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  faqsServices,
  features2Services,
  features4Services,
  bookingServices,
  testimonialsServices,
} from '~/shared/data/pages/booking.data';

export const metadata: Metadata = {
  title: 'Booking',
};

const Page = () => {
  return (
    <>
      <Booking {...bookingServices} />
      <Features2 {...features2Services} />
      <Content {...contentServicesOne} />
      <Content {...contentServicesTwo} />
      <Features4 {...features4Services} />
      <Testimonials {...testimonialsServices} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
