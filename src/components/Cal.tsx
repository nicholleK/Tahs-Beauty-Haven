// components/CalEmbed.tsx
'use client';

import Cal from '@calcom/embed-react';

type CalEmbedProps = {
  calLink: string; // your Cal.com link
  height?: string | number; // optional height
  config?: Record<string, any>;
  style: Record<string, any>;
};

const CalEmbed = ({ calLink, height = 700 }: CalEmbedProps) => {
  return (
    <div style={{ width: '100%', height }}>
      <Cal
        calLink={calLink}
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
};

export default CalEmbed;
