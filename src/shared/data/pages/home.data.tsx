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

  title: (
    <>
      Experience Hair Perfection
      {/* <br></br> */}
    </>
  ),
  subtitle: (
    <>
      Welcome to <strong>Tah's Beauty Haven</strong>, where you come to relax, unwind and let us bring your hair dreams
      to life. Ready to transform your look with the latest trends and expert hands?
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
      text: 'test1',
      image: {
        src: pic7,
        alt: 'Cornrows',
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
      text: 'test3',
      image: {
        src: pic9,
        alt: 'Braids',
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

// SocialProof data on Home page *******************
// export const socialProofHome: SocialProofProps = {
//   id: 'socialProof-on-home',
//   hasBackground: true,
//   images: [
//     {
//       link: 'https://nextjs.org/',
//       src: nextJsLogo,
//       alt: 'NextJs Logo',
//     },
//     {
//       link: 'https://react.dev/',
//       src: reactLogo,
//       alt: 'React Logo',
//     },
//     {
//       link: 'https://tailwindcss.com/',
//       src: tailwindCssLogo,
//       alt: 'Tailwind CSS Logo',
//     },
//     {
//       link: 'https://www.typescriptlang.org/',
//       src: typescriptLogo,
//       alt: 'Typescript Logo',
//     },
//   ],
// };

// Features data on Home page *******************

// export const featuresHome: FeaturesProps = {
//   id: 'features-on-home',
//   hasBackground: false,
//   columns: 3,
//   header: {
//     title: (
//       <>
//         What you get with <span className="whitespace-nowrap">TailNext</span>
//       </>
//     ),
//     subtitle:
//       "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
//     tagline: 'Features',
//   },
//   items: [
//     {
//       title: 'Next.Js + Tailwind CSS Integration',
//       description:
//         'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
//       icon: IconBrandTailwind,
//       callToAction: {
//         text: 'Discover now',
//         href: '/',
//       },
//     },
//     {
//       title: 'Ready-to-use Components',
//       description:
//         'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
//       icon: IconComponents,
//       callToAction: {
//         text: 'Discover now',
//         href: '/',
//       },
//     },
//     {
//       title: 'Best Practices',
//       description:
//         'By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.',
//       icon: IconListCheck,
//       callToAction: {
//         text: 'Discover now',
//         href: '/',
//       },
//     },
//     {
//       title: 'Excellent Page Speed',
//       description:
//         'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
//       icon: IconRocket,
//       callToAction: {
//         text: 'Discover now',
//         href: '/',
//       },
//     },
//     {
//       title: 'Search Engine Optimization (SEO)',
//       description:
//         "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
//       icon: IconArrowsRightLeft,
//       callToAction: {
//         text: 'Discover now',
//         href: '/',
//       },
//     },
//     {
//       title: 'Open to new ideas and contributions',
//       description:
//         'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
//       icon: IconBulb,
//       callToAction: {
//         text: 'Discover now',
//         href: '/',
//       },
//     },
//   ],
// };

// Content data on Home page *******************
// export const contentHomeOne: ContentProps = {
//   id: 'contentOne-on-home-one',
//   hasBackground: true,
//   header: {
//     title: 'Aliquip definiebas ad est',
//     subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
//     tagline: 'Content',
//   },
//   content:
//     'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
//   items: [
//     {
//       title: 'Per ei quaeque sensibus',
//       description:
//         'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
//     },
//     {
//       title: 'Cu imperdiet posidonium sed',
//       description:
//         'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
//     },
//     {
//       title: 'Nulla omittam sadipscing mel ne',
//       description:
//         'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
//     },
//   ],
//   image: {
//     src: cameraFrontImg,
//     alt: 'Colorful Image',
//   },
//   isReversed: false,
//   isAfterContent: false,
// };

// POLICIES
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: false,

  content: 'Booking Policies',
  items: [
    {
      title: (
        <>
          {' '}
          A <strong>NON-REFUNDABLE </strong> deposit of 30% of your total is required to secure your appointment.{' '}
        </>
      ),
    },
    {
      title: (
        <>
          {' '}
          Cancellations & rescheduling can only be done <strong>up to 24 hours</strong> before your appointment.{' '}
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

// Steps data on Home page *******************
// export const stepsHome: StepsProps = {
//   id: 'steps-on-home',
//   hasBackground: false,
//   isReversed: false,
//   isImageDisplayed: true,
//   image: {
//     src: gasImg,
//     alt: 'Steps image',
//   },
//   header: {
//     title: 'Sed ac magna sit amet risus tristique interdum.',
//   },
//   items: [
//     {
//       title: 'Step 1',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Step 2',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Step 3',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
//       icon: IconArrowDown,
//     },
//     {
//       title: 'Ready!',
//     },
//   ],
// };

// FAQS data on Home page *******************
// export const testimonialsHome: TestimonialsProps = {
//   id: 'testimonials-on-home',
//   hasBackground: true,
//   header: {
//     title: 'What our customers say about us',
//     subtitle:
//       'Etiamm sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
//   },
//   testimonials: [
//     {
//       name: 'Tayla Kirsten',
//       job: 'Marketing Manager',
//       testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Tayla Kirsten',
//       },
//       href: '/',
//     },
//     {
//       name: 'Silver Jordan',
//       job: 'Senior Marketer',
//       testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Silver Jordan',
//       },
//       href: '/',
//     },
//     {
//       name: 'Kelsey Arden',
//       job: 'Co-Founder & CEO',
//       testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Kelsey Arden',
//       },
//       href: '/',
//     },
//     {
//       name: 'Sarah Johnson',
//       job: 'Business Owner',
//       testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Sarah Johnson',
//       },
//       href: '/',
//     },
//     {
//       name: 'Keith Young',
//       job: 'Freelance Developer',
//       testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Keith Young',
//       },
//       href: '/',
//     },
//     {
//       name: 'Lisa Gordon',
//       job: 'Project Manager',
//       testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Lisa Gordon',
//       },
//       href: '/',
//     },
//   ],
// };

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

// Pricing data on Home page *******************
// export const pricingHome: PricingProps = {
//   id: 'pricing-on-home',
//   hasBackground: true,
//   header: {
//     title: 'Prices for each plan',
//     subtitle:
//       'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
//     // tagline: 'Pricing',
//   },
//   prices: [
//     {
//       title: 'basic',
//       price: 29,
//       period: 'per month',
//       items: [
//         {
//           description: 'Etiam in libero, et volutpat',
//         },
//         {
//           description: 'Aenean ac nunc dolor tristique',
//         },
//         {
//           description: 'Cras scelerisque accumsan lib',
//         },
//         {
//           description: 'In hac habitasse',
//         },
//       ],
//       callToAction: {
//         targetBlank: true,
//         text: 'Free 7-day trial',
//         href: '/',
//       },
//       hasRibbon: false,
//     },
//     {
//       title: 'standard',
//       price: 69,
//       period: 'per month',
//       items: [
//         {
//           description: 'Proin vel laoreet',
//         },
//         {
//           description: 'Ut efficitur egestas',
//         },
//         {
//           description: 'Pellentesque ut nibh',
//         },
//         {
//           description: 'Donec fringilla sem',
//         },
//       ],
//       callToAction: {
//         targetBlank: true,
//         text: 'Free 15-day trial',
//         href: '/',
//       },
//       hasRibbon: true,
//       ribbonTitle: 'Popular',
//     },
//     {
//       title: 'premium',
//       price: 199,
//       period: 'per month',
//       items: [
//         {
//           description: 'Curabitur suscipit risus',
//         },
//         {
//           description: 'Aliquam blandit malesuada',
//         },
//         {
//           description: 'Suspendisse sit amet',
//         },
//         {
//           description: 'Suspendisse auctor dui',
//         },
//       ],
//       callToAction: {
//         targetBlank: true,
//         text: 'Free 30-day trial',
//         href: '/',
//       },
//       hasRibbon: false,
//     },
//   ],
// };

// Team data on Home page *******************
// export const teamHome: TeamProps = {
//   id: 'team-on-home',
//   hasBackground: false,
//   header: {
//     title: 'Team Members',
//     subtitle:
//       'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
//     // tagline: 'Team',
//   },
//   teams: [
//     {
//       name: 'Cindy Belcher',
//       occupation: 'SEO Consultant',
//       image: {
//         src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Cindy Belcher',
//       },
//       items: [
//         {
//           title: 'Know more on Twitter',
//           icon: IconBrandTwitter,
//           href: '#',
//         },
//         {
//           title: 'Know more on Linkedin',
//           icon: IconBrandLinkedin,
//           href: '#',
//         },
//         {
//           title: 'Contact by email',
//           icon: IconMail,
//           href: '#',
//         },
//       ],
//     },
//     {
//       name: 'Toby Foster',
//       occupation: 'Marketing Tech',
//       image: {
//         src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
//         alt: 'Toby Foster',
//       },
//       items: [
//         {
//           title: 'Know more on Twitter',
//           icon: IconBrandTwitter,
//           href: '#',
//         },
//         {
//           title: 'Know more on Linkedin',
//           icon: IconBrandLinkedin,
//           href: '#',
//         },
//         {
//           title: 'Contact by email',
//           icon: IconMail,
//           href: '#',
//         },
//       ],
//     },
//     {
//       name: 'Clark Bourne',
//       occupation: 'Content Manager',
//       image: {
//         src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
//         alt: 'Clark Bourne',
//       },
//       items: [
//         {
//           title: 'Know more on Twitter',
//           icon: IconBrandTwitter,
//           href: '#',
//         },
//         {
//           title: 'Know more on Linkedin',
//           icon: IconBrandLinkedin,
//           href: '#',
//         },
//         {
//           title: 'Contact by email',
//           icon: IconMail,
//           href: '#',
//         },
//       ],
//     },
//     {
//       name: 'Bella Chase',
//       occupation: 'UX Designer',
//       image: {
//         src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
//         alt: 'Bella Chase',
//       },
//       items: [
//         {
//           title: 'Know more on Twitter',
//           icon: IconBrandTwitter,
//           href: '#',
//         },
//         {
//           title: 'Know more on Linkedin',
//           icon: IconBrandLinkedin,
//           href: '#',
//         },
//         {
//           title: 'Contact by email',
//           icon: IconMail,
//           href: '#',
//         },
//       ],
//     },
//   ],
// };

// ContactS AND BOOKING data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: false,
  header: {
    title: 'Get in Touch',
    subtitle: 'Book an appointment below',
    // tagline: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Auckland Park'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +27 78 779 1860', 'Mail: tanyaradzwamaria@icloud.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
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
