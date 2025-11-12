import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '~/shared/types';
import Background from './Background';

const WidgetWrapper = ({ children, id, hasBackground, containerClass }: WrapperTagProps) => (
  <section className="relative not-prose scroll-mt-[72px]  " id={id}>
    <>
      <div>
        {hasBackground && (
          <div className="absolute inset-0  w-full h-full">
            <Background hasBackground={hasBackground} />
          </div>
        )}
      </div>
      <div
        className={twMerge(
          'mx-auto max-w-7xl px-4 py-6 my-6',
          // 'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
          containerClass,
        )}
      >
        {children}
      </div>
    </>
  </section>
);

export default WidgetWrapper;
