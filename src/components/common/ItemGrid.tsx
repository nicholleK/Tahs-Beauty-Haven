'use client';
import { twMerge } from 'tailwind-merge';
import type { ItemGrid as ItemGridType } from '~/shared/types';
import CTA from './CTA';
import Image from 'next/image';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ItemGrid = ({
  id,
  items,
  text,
  items2,
  columns,
  defaultColumns,
  containerClass,
  panelClass,
  titleClass,
  descriptionClass,
  actionClass,
  image,
  showBullets = true,
  callToAction,
}: ItemGridType) => {
  return (
    <>
      {items && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className={twMerge(
            `grid mx-auto gap-8 md:gap-y-12 ${
              (columns || defaultColumns) === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  '
                : (columns || defaultColumns) === 3
                  ? 'lg:grid-cols-3 sm:grid-cols-2 '
                  : (columns || defaultColumns) === 2
                    ? 'sm:grid-cols-2'
                    : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon, callToAction, image, color, isCard = true }, index) => (
            <motion.div
              key={id ? `item-${id}-${index}` : `item-grid-${index}`}
              variants={itemVariants}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
              className={twMerge(
                isCard
                  ? 'flex flex-col  justify-center items-center p-6 rounded-xl dark:text-black bg-white/10 backdrop-blur-lg border border-white/5 shadow-lg hover:bg-white/20 hover:shadow-2xl'
                  : 'bg-transparent/0 max-w-lg shadow-none p-0  justify-center items-center text-black dark:text-white',
                panelClass,
              )}
              style={color}
            >
              {image && (
                <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                  <Image className="object-cover rounded-lg" src={image.src} alt="Image" fill />
                </div>
              )}
              {title && <h3 className={twMerge('text-xl font-bold', titleClass)}>{title}</h3>}
              {description && (
                <div
                  className={twMerge(
                    ` mt-2 prose dark:prose-invert text-gray-600 dark:text-slate-400 ${title ? '' : ''}`,
                    descriptionClass,
                  )}
                >
                  {description}
                </div>
              )}
              {callToAction && (
                <CTA
                  callToAction={callToAction}
                  linkClass={twMerge(
                    `${title || description ? 'mt-3' : ''} text-primary font-bold text-purple-600 hover:underline dark:text-purple-600 cursor-pointer`,
                    actionClass,
                  )}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
      {text && text}
      {/* ITEMS 2: Simple list */}
      {items2 && (
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className={twMerge(`${showBullets ? 'list-disc pl-6' : 'list-none pl-0'}  space-y-2`, containerClass)}
        >
          {items2.map(({ title, description }, index) => (
            <motion.li
              variants={itemVariants}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
              key={id ? `item2-${id}-${index}` : `item2-${index}`}
            >
              {title && (
                <span className={twMerge(' font-extralight', titleClass, 'text-gray-700 dark:text-slate-400 ')}>
                  {title}
                </span>
              )}
              {description && (
                <p className={twMerge(' text-gray-600 dark:text-slate-400', descriptionClass)}>{description}</p>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {callToAction && (
        <div className="mt-8 flex justify-center">
          <CTA
            callToAction={callToAction}
            linkClass={twMerge(
              ` text-primary font-bold text-purple-600 hover:underline dark:text-purple-600 cursor-pointer`,
              actionClass,
            )}
          />
        </div>
      )}
    </>
  );
};

export default ItemGrid;
