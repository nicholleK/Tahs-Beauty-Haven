'use client';
import Image from 'next/image';
import { IconChevronRight } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import Background from '../common/Background';

const Content = ({
  header,
  content,
  items2,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {/* {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-black dark:text-white " />} */}
    <div className="mx-auto max-w-7xl ">
      <div className={`md:flex  ${isReversed ? 'md:flex-row' : ''} md:gap-16`}>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {image && (
            <div className="relative w:[500px] -mx-4 md:-mx-8 lg:-mx-12  sm:max-w-5xl md:px-0">
              <Image
                className=" w-full mx-auto rounded-sm  md:-ml-10 shadow-lg  bg-gray-400 dark:bg-slate-700"
                src={image.src}
                width={828}
                height={828}
                alt="Image"
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          )}
        </div>
        <div className="self-start md:basis-1/2 ">
          {content && (
            <>
              <div className=" m-4 lg:mb-15 font-bold text-2xl text-center sm:text-3xl text-black dark:text-white">
                {content}
              </div>
              <p className="m-4 text-center font-extralight">
                To ensure a seamless experience, please take note of our policies below.
              </p>
            </>
          )}

          <ItemGrid
            items2={items2}
            columns={1}
            // defaultIcon={IconChevronRight}
            containerClass="gap-4 md:gap-y-6"
            panelClass="flex max-w-full"
            titleClass="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2"
            descriptionClass="mt-1 text-gray-600 dark:text-slate-400"
            iconClass="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-purple-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
          />
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;
