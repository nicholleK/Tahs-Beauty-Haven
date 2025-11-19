'use client';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  if (!callToAction) return null;

  const { text, href, icon: Icon, targetBlank, colorClass } = callToAction as CallToActionType;
  const finalClass = twMerge('inline-flex items-center justify-center w-full sm:mb-0', colorClass || linkClass);
  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          <Link
            className={finalClass}
            href={href}
            target={targetBlank ? '_blank' : '_self'}
            rel={targetBlank ? 'noopener noreferrer' : undefined}
          >
            {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
            {text}
          </Link>
        </div>
      )}
    </>
  );
};

export default CTA;
