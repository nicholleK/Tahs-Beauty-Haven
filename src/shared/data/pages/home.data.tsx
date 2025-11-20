import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FloatingBtnProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import pic1 from '~/assets/images/pic.jpg';
import pic2 from '~/assets/images/pic2.jpg';
import pic3 from '~/assets/images/pic3.jpg';
import pic4 from '~/assets/images/pic4.jpg';
import pic5 from '~/assets/images/pic5.jpg';
import pic6 from '~/assets/images/pic6.jpg';
import pic7 from '~/assets/images/pic7.jpg';
import pic8 from '~/assets/images/pic8.jpg';
import pic9 from '~/assets/images/pic9.jpg';
import pic10 from '~/assets/images/pic10.jpg';
// import hair from '~/assets/images/hair.jpg';
import girl from '~/assets/images/girl-with-hair.jpg';
import qrcode from '~/assets/images/wa-qrcode.svg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';
import ItemGrid from '~/components/common/ItemGrid';

//Floating btn
export const floatingBtn: FloatingBtnProps = {
  callToAction: {
    text: 'Book Now',
    href: '/booking',
    colorClass:
      'btn bg-[#3B0270]/30 backdrop-blur-md text-black hover:bg-[#500073]   hover:text-white hover:backdrop-blur-md dark:bg-purple-500 dark:text-black',
  },
};

// Hero data on Home page *******************
// HERO
export const heroHome: HeroProps = {
  image: [
    {
      src: pic1,
      alt: 'Hero TailNext',
    },
    {
      src: pic2,
      alt: 'Hero TailNext',
    },
    {
      src: pic3,
      alt: 'Hero TailNext',
    },
    {
      src: pic4,
      alt: 'Hero TailNext',
    },
    {
      src: pic5,
      alt: 'Hero TailNext',
    },
    {
      src: pic6,
      alt: 'Hero TailNext',
    },
    {
      src: pic8,
      alt: 'Hero TailNext',
    },
  ],

  title: ' Experience Hair Perfection',
  subtitle: (
    <>
      Welcome to <strong>Tah&apos;s Beauty Haven</strong>, where you come to relax, unwind and let us bring your hair
      dreams to life. Ready to transform your look with the latest trends and expert hands?
    </>
  ),

  callToAction: {
    // text: 'Book Now',
    text: 'View Our Services',
    href: '/services',
    colorClass:
      'btn bg-[#3B0270]/30 backdrop-blur-md text-black hover:bg-[#500073] hover:text-white hover:backdrop-blur-md dark:bg-purple-500 dark:text-black',
  },
  callToAction2: {
    text: 'Book Now',
    href: '/booking',
    colorClass:
      'btn bg-[#3B0270]/30 backdrop-blur-md text-black hover:bg-[#500073] hover:text-white hover:backdrop-blur-md dark:bg-purple-500 dark:text-black',
  },
};
// SERVICES OVERVIEW
export const servicesHomeOverview: TestimonialsProps = {
  id: 'services-on-home',
  hasBackground: true,
  header: {
    title: 'What we do',
    subtitle: 'Checkout our services',
  },
  testimonials: [
    {
      testimonial: `testimonial1`,
      text: 'Faux Locs',
      image: {
        src: pic7,
        alt: 'Faux Locs',
      },
    },
    {
      testimonial: `testimonial2`,
      text: 'Braids',
      image: {
        src: pic10,
        alt: 'Braids',
      },
    },
    {
      testimonial: `testimonial3`,
      text: 'Conrows',
      image: {
        src: pic9,
        alt: 'Conrows',
      },
    },
  ],

  callToAction: {
    text: 'View More Services',
    href: '/services',
    colorClass:
      'btn bg-[#C5B0CD]/100 backdrop-blur-md text-black hover:bg-[#500073] hover:text-white hover:backdrop-blur-md dark:bg-purple-500 dark:text-black',
  },
};

// BOOKING POLICIES
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,

  content: 'Booking Policies',

  items2: [
    {
      title: (
        <>
          A <strong>NON-REFUNDABLE </strong> deposit of 30% of your total is required to secure your appointment.{' '}
        </>
      ),
    },
    {
      title: (
        <>
          Cancellations & rescheduling can only be done <strong>up to 24 hours</strong> before your appointment via the
          appropriate means used to book.
        </>
      ),
    },
    {
      title: (
        <>
          {' '}
          If you are late, an accumulative fee of <strong>R50</strong> will be charged <strong>every 30 minutes</strong>
          . Your appointment will automatically be cancelled after an hour and the deposit <strong>WILL NOT</strong> be
          refunded.{' '}
        </>
      ),
    },
    {
      title: (
        <>
          {' '}
          Please ensure your hair is washed, detangled and slightly moisturized. Avoid using hair food or oils for a few
          days prior to your appointment.{' '}
        </>
      ),
    },
    {
      title: (
        <>
          {' '}
          Unclean or greasy hair will be washed at an <strong>additional cost</strong>.{' '}
        </>
      ),
    },
    {
      title: <> If you have short hair, please specify that detail when you book your appointment. </>,
    },
    {
      title: (
        <>
          {' '}
          If you have planned arrangements after your appointment please notify the stylist beforehand to ensure time is
          managed wisely.{' '}
        </>
      ),
    },
  ],
  image: {
    src: girl,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: true,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Take a look at our frequently asked questions.',
    // tagline: 'FAQS',
  },
  items: [
    {
      title: 'Do I need to make a booking/appointment?',
      description: `Yes, you need to book your appointment at least 3 days before your desired date. 
      You can either use our whatsapp number below, scan the QR code or head on to our booking page to send your booking request. 
      NB: Expect to get your booking confirmation at most a day after booking.`,
    },
    {
      title: 'Do I require a deposit?',
      description: `Yes, a NON-REFUNDABLE deposit fee of 30% of the total cost is required to secure your appointment.`,
    },
    {
      title: 'What happens if I am late for my appointment?',
      description: `An accumulative late fee of R50 will be charged every 30 minutes. 
      If you are an hour or more late, your appointment will automatically be cancelled and the deposit will NOT be refunded.`,
    },
    {
      title: 'Which payment methods do you accept?',
      description: `EFTs, cash, bank transfers.`,
    },
    {
      title: 'What is your rescheduling and cancellation policy?',
      description: `You can only reschedule or cancel your appointment up to 24 hours before your confirmed date and time.`,
    },
    {
      title: 'Do you accept walk-ins or last minute bookings?',
      description: `Ideally no, pre-booking is highly advised. However, if there are no clients at the time of your last minute booking and the service required is less complicated, then exceptions can be made. `,
    },
  ],
};

// ContactS AND BOOKING data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  // background: { backgroundColor: 'black' },
  header: {
    title: 'Get in Touch',
    subtitle: 'Book an appointment below',
    // tagline: 'Contact',
  },
  content:
    'Experience confidence, comfort, and professional care — all in one place. Whether you’re booking your next treatment or have a question for our team, we’re just a message away. Let’s create your perfect look together',
  items: [
    {
      title: 'Our Address',
      description: ['189 Perth Road. Westdene'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +27 78 779 1860', 'Mail: tanyaradzwamaria@icloud.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 07:00 - 18:00', 'Saturday & Sunday: 07:00 - 18:00'],
      icon: IconClock,
    },
  ],

  image: {
    src: qrcode,
    alt: 'Calendar',
  },

  // form: {
  //   title: 'Ready to Get Started?',
  //   inputs: [
  //     {
  //       type: 'text',
  //       name: 'name',
  //       autocomplete: 'off',
  //       placeholder: 'Your name',
  //     },
  //     {
  //       type: 'email',
  //       name: 'email',
  //       autocomplete: 'on',
  //       placeholder: 'Your email address',
  //     },
  //   ],
  //   textarea: {
  //     cols: 30,
  //     rows: 5,
  //     name: 'textarea',
  //     placeholder: 'Write your message...',
  //   },
  //   btn: {
  //     title: 'Send Message',
  //     type: 'submit',
  //   },
  // },
};

// CallToAction data *******************
// export const callToAction2Home: CallToActionProps = {
//   title: 'Next.js + Tailwind CSS',
//   subtitle:
//     'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
//   callToAction: {
//     text: 'Get template',
//     href: 'https://github.com/onwidget/tailnext',
//     icon: IconDownload,
//   },
//   items: [
//     {
//       title: 'Get template',
//       description: 'Aliquam sodales est lectus, quis.',
//       href: 'https://github.com/onwidget/tailnext',
//     },
//     {
//       title: 'Learn more',
//       description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
//       href: '/',
//     },
//     {
//       title: 'Subscribe',
//       description: 'Morbi orci nunc, euismod ac dui id, convallis.',
//       form: {
//         icon: IconMail,
//         input: {
//           type: 'email',
//           name: 'email',
//           autocomplete: 'email',
//           placeholder: 'Enter your email address',
//         },
//         btn: {
//           title: 'Subscribe',
//           type: 'submit',
//         },
//       },
//     },
//   ],
// };
