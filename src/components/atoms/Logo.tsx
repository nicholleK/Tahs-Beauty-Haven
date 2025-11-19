import Image from 'next/image';

const Logo = () => (
  <>
    <div className="ml-2 flex items-center">
      <Image
        src={'/logo/vector/default-monochrome-black.svg'}
        className="dark:hidden"
        alt="TBH logo"
        width={450}
        height={100}
        priority
      />
      <Image
        src={'logo/vector/default-monochrome-white.svg'}
        className="hidden dark:block"
        alt="TBH logo"
        width={450}
        height={100}
        priority
      />
    </div>
  </>
);

export default Logo;
