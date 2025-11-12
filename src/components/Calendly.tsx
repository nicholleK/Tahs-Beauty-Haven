'use client';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';

type Image = {
  link?: string;
  src?: string | StaticImageData;
  alt?: string;
};

const Calendly = ({ image }: { image?: Image }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      {image && (
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/tafadzwakurwa64/30min?hide_gdpr_banner=1&primary_color=c580ec"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      )}
    </div>
  );
};

export default Calendly;
