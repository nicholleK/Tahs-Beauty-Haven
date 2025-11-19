import { twMerge } from 'tailwind-merge';

interface DividerLine {
  dividerLineClass?: string;
}

const DividerLine = ({ dividerLineClass }: DividerLine) => (
  <hr className={twMerge('border-gray-200 dark:border-none my-8 ', dividerLineClass)} />
);

export default DividerLine;
