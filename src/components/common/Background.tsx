const Background = ({ hasBackground }: { hasBackground?: boolean }) => (
  <div className={`h-full w-full ${hasBackground ? 'bg-white/10 dark:bg-[#DB8DD0]/30' : 'bg-transparent'}`} />
);

export default Background;
