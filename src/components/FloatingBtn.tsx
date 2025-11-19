'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import CallToAction from '~/components/widgets/CallToAction';
import { callToActionServices } from '~/shared/data/pages/booking.data';
import CTA from '~/components/common/CTA';
import { FloatingBtnProps } from '~/shared/types';

const FloatingBtn = ({ callToAction }: FloatingBtnProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'braids' });
      cal('floatingButton', {
        calLink: 'tafadzwa-k/braids',
        config: { layout: 'month_view' },
        buttonText: 'Book Now',
        hideButtonIcon: true,
      });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return <div>{callToAction && <CTA callToAction={callToAction} />}</div>;
};

export default FloatingBtn;
