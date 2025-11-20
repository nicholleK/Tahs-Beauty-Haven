import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconChevronsDown,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

// import tools from '~/assets/images/tools.jpg';
import tools3 from '~/assets/images/tools3.png';
import pic2 from '~/assets/images/pic2.jpg';
import pic3 from '~/assets/images/pic3.jpg';
import pic4 from '~/assets/images/pic4.jpg';
import pic5 from '~/assets/images/pic5.jpg';
import pic6 from '~/assets/images/pic6.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  variant: 'background',
  staticImage: {
    src: tools3,
    alt: 'Hairdresser tools',
  },
  title: 'Transform Your Look with Our Services',
  subtitle: (
    <>
      We believe your hair is more than just strands—it’s a statement of confidence, creativity, and individuality. From
      intricate braids and twists to luxurious freehand styles and faux locs, we craft every look to perfectly reflect
      your personality.
      <br></br>
      <br></br>
      Experience hair styling that elevates not just your look, but your spirit.
    </>
  ),
  callToAction: {
    text: (
      <>
        {' '}
        Services <IconChevronsDown />{' '}
      </>
    ),
    href: '#features2',
    colorClass:
      'btn bg-[#C5B0CD]/100 backdrop-blur-md text-black hover:bg-[#500073] hover:text-white hover:backdrop-blur-md dark:bg-purple-500 dark:text-black',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Services',
  },
  items: [
    {
      image: pic5,
      title: 'Sweet & Sour',
      description: <>From R250</>,
      color: { backgroundImage: 'linear-gradient(30deg, #DAD2FF 40%, #f3e8f4  60%)' },
    },
    {
      image: pic2,
      title: 'Knotless Braids, Twists',
      description: <>From R200</>,
      color: { backgroundImage: 'linear-gradient(145deg, #f3e8f4 40%, #DAD2FF  60%)' },
    },
    {
      image: pic3,
      title: 'Straight Back/Up',
      description: (
        <>
          From R150
          {/* <ul>
            <li>small: R100</li>
            <li>medium: R200</li>
            <li>large: R300</li>
          </ul> */}
        </>
      ),
      color: { backgroundImage: 'linear-gradient(130deg, #DAD2FF 40%, #f3e8f4  60%)' },
    },
    {
      image: pic6,
      title: 'Faux Locs Installation',
      description: <>From R150</>,
      color: { backgroundImage: 'linear-gradient(-120deg, #DAD2FF 40%, #f3e8f4  60%)' },
    },

    {
      image: pic2,
      title: 'Half sew-ins Half braids, Cornrows',
      description: <>From R150</>,
      color: { backgroundImage: 'linear-gradient(150deg, #DAD2FF 50%, #f3e8f4  51%)' },
    },
    {
      image: pic4,
      title: 'Freehand, Wash & Deep Conditioning',
      description: <>From R60</>,
      color: { backgroundImage: 'linear-gradient(-120deg, #DAD2FF 40%, #f3e8f4  60%)' },
    },
  ],
  text: (
    <>
      <br></br>
      <strong>Please Note:</strong>
      <ul className="list-disc list-inside ml-4 text-gray-600">
        <li>Prices differ based on the style, size & length.</li>
        <li>Hair Piece is provided at an additional cost.</li>
      </ul>
    </>
  ),

  callToAction: {
    text: 'Book Now',
    href: '/booking',
    colorClass:
      'btn bg-[#C5B0CD]/100 backdrop-blur-md text-black hover:bg-[#500073] hover:text-white hover:backdrop-blur-md dark:bg-purple-500 dark:text-black',
  },
};

// Content data on Services page *******************
// export const contentServicesOne: ContentProps = {
//   id: 'contentOne-on-services-one',
//   hasBackground: false,
//   content:
//     'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
//   items2: [
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
//   isReversed: true,
//   isAfterContent: false,
// };

// GALLERY: Feature4 data on Services page *******************
// export const features4Services: FeaturesProps = {
//   id: 'featuresFour-on-services',
//   hasBackground: true,
//   columns: 2,
//   header: {
//     title: 'Main Features',
//     subtitle:
//       'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
//   },
//   isImageDisplayed: true,
//   image: {
//     src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
//     alt: 'Hero TailNext',
//   },
//   items: [
//     {
//       title: 'Next.Js + Tailwind CSS Integration',
//       description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
//     },
//     {
//       title: 'Ready-to-use Components',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       title: 'Best Practices',
//       description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
//     },
//     {
//       title: 'Excellent Page Speed',
//       description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
//     },
//     {
//       title: 'Search Engine Optimization (SEO)',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
//     },
//     {
//       title: 'Open to new ideas and contributions',
//       description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
//     },
//   ],
// };

// Testimonials data on Services page *******************
// export const testimonialsServices: TestimonialsProps = {
//   id: 'testimonials-on-home',
//   hasBackground: false,
//   isTestimonialUp: true,
//   header: {
//     title: 'Satisfied Client Experiences',
//     subtitle:
//       'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
//   },
//   testimonials: [
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
//   callToAction: {
//     targetBlank: true,
//     text: 'More testimonials...',
//     href: '/',
//   },
// };

// FAQS data on Services page *******************

// CallToAction data on Services page *******************
// export const callToActionServices: CallToActionProps = {
//   id: 'callToAction-on-services',
//   hasBackground: false,
//   title: 'Still have questions?',
//   subtitle:
//     'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
//   callToAction: {
//     text: 'Contact us',
//     href: '/contact',
//   },
// };
