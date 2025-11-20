import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Image from 'next/image';
import Calendly from '../Calendly';
import Cal from '../Cal';
import React from 'react';
import DividerLine from '../common/DividerLine';

const Contact = ({ header, content, items, form, id, hasBackground = true, image, background }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} background={background} containerClass="max-w-6xl">
    <DividerLine />
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center" style={background}>
      <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-center text-lg text-gray-600 dark:text-slate-400">{content}</p>}
          <ul className="mb-6 md:mb-0">
            {items &&
              items.map(({ title, description, icon: Icon }, index) => (
                <li key={`item-contact-${index}`} className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-500 dark:bg-slate-200 text-gray-50">
                    {Icon && <Icon className="h-6 w-6 bg-purple-500 dark:text-black dark:bg-transparent" />}
                  </div>
                  <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                    {typeof description === 'string' && (
                      <p className="text-gray-600 dark:text-slate-400">{description}</p>
                    )}

                    {Array.isArray(description) &&
                      description.map((desc: string, i: number) => (
                        <p key={`text-description-${i}`} className="text-gray-600 dark:text-slate-400">
                          {desc}
                        </p>
                      ))}

                    {React.isValidElement(description) && (
                      <div className="text-gray-600 dark:text-slate-400">{description}</div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* Calender embed */}
        <div>
          {image && (
            <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#C5B0CD]/100 dark:bg-[#DB8DD0]/30">
              <h1 className="text-3xl font-bold dark:text-black mb-6">Book Your Appointment</h1>

              <Cal
                calLink="tah-s-beauty-haven/hair-appointment"
                config={{ layout: 'month-view', hideEventTypeDetails: false }}
                height={700}
                style={{ width: '100%' }}
              />
            </section>
          )}
        </div>
        {/* <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" /> */}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
