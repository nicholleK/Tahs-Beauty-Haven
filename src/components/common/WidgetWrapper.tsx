import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '~/shared/types';
import Background from './Background';
import React from 'react';

const WidgetWrapper = ({ children, id, hasBackground, containerClass, background }: WrapperTagProps) => {
  const hasChildren = React.Children.count(children) > 0;
  const hasBg = hasBackground || background;

  // If no content at all, return nothing
  if (!hasChildren || !hasBg) return null; //THIS DAMNING CODE section GAVE ME ZOOMIES

  let bgElement: React.ReactNode = null;
  if (hasBackground) {
    bgElement = <Background hasBackground={hasBackground} />;
  } else if (background) {
    if (React.isValidElement(background)) {
      bgElement = background;
    } else if (typeof background === 'object') {
      bgElement = <div className="absolute inset-0 w-full h-full" style={background as React.CSSProperties} />;
    }
  }

  return (
    <section className="relative not-prose scroll-mt-[72px]" id={id}>
      {bgElement && <>{bgElement}</>}
      {hasChildren && <div className={twMerge('mx-auto max-w-7xl px-4 py-6', containerClass)}>{children}</div>}
    </section>
  );
};

export default WidgetWrapper;
