import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { FooterProps, HeaderProps } from '../types';

// Announcement data
// export const announcementData: AnnouncementProps = {
//   title: 'NEW',
//   callToAction: {
//     text: 'This template is made with Next.js 14 using the new App Router »',
//     href: 'https://nextjs.org/blog/next-14',
//   },
//   callToAction2: {
//     text: 'Follow @onWidget on Twitter',
//     href: 'https://twitter.com/intent/user?screen_name=onwidget',
//   },
// };

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Booking',
      href: '/booking',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        // {
        //   label: 'Register',
        //   href: '/register',
        // },
        // {
        //   label: 'Login',
        //   href: '/login',
        // },
        // {
        //   label: 'About',
        //   href: '/about',
        // },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
      ],
    },
  ],
  // actions: [
  //   {
  //     text: 'Download',
  //     href: 'https://github.com/onwidget/tailnext',
  //     targetBlank: true,
  //   },
  // ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    // { label: 'RSS', icon: IconRss, href: '#' },
    // { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Copyright{' '}
        <a className="font-semibold text-slate-900 dark:text-gray-200 hover:text-purple-600 hover:underline dark:hover:text-purple-600">
          {' '}
          <span>Tah&apos;s Beauty Haven.</span>
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['123 Auckland Park'],
    },
    {
      title: 'Phone',
      texts: ['Office Mobile: +27 78 779 1860', 'Alternative: +0123456789'],
    },
    {
      title: 'Email',
      texts: ['tanyaradzwamaria@icloud.com', 'Site: https://example.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    // { label: 'RSS', icon: IconRss, href: '#' },
    // { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Copyright &#169; 2025{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-purple-600 hover:underline dark:hover:text-purple-600"
          href="/"
        >
          {' '}
          <span>Tah&apos;s Beauty Haven.</span>
        </a>{' '}
      </span>
    </div>
  ),
};
