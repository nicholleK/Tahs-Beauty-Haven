import {
  IconClock,
  IconHeadset,
  IconHelp,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconMail,
  IconCalendarCheck,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import pic1 from '~/assets/images/pic.jpg';
import qrcode from '~/assets/images/wa-qrcode.svg';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  staticImage: {
    src: qrcode,
    alt: 'Contact QR code',
    className: 'flex justify-center items-center w-[900px] h-[400px] md:h-[600px] lg:h-[600px] ',
  },
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Thank you for trusting us with your beauty! We're excited to hear from you.`}</span>{' '}
      {`We will assist with any questions you might have.`}
    </>
  ),

  // tagline: 'Demo Contact Page',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: <IconMapPin />,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: <IconPhoneCall />,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: <IconClock />,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Reviews',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    // checkboxes: [
    //   {
    //     label: 'Have you read our privacy policy?',
    //     value: '',
    //   },
    //   {
    //     label: 'Do you want to receive monthly updates by email?',
    //     value: '',
    //   },
    // ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions on the home page.',
      icon: <IconHelp />,
      callToAction: {
        text: 'Go to FAQs',
        // href: '/faqs',
        href: '/#faqsTwo-on-home',
      },
    },
    {
      title: 'Chat with us',
      description: 'Send us a Whatsapp message.',
      icon: <IconBrandWhatsapp />,
      callToAction: {
        text: "Let's chat!",
        href: 'https://wa.me/27787791860',
      },
    },
    {
      title: 'Ready to change your style?',
      description: 'Schedule your appointment.',
      icon: <IconCalendarCheck />,
      callToAction: {
        text: 'Book Now',
        href: '/booking',
      },
    },
  ],
};
