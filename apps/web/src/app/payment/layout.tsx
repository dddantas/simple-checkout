'use client';

import { MainContent, PaymentInfo } from '@simple-checkout/ui/components';
import { ReactNode } from 'react';
import { usePaymentContext } from '../../shared/hooks/usePaymentContext';

type Props = {
  children: ReactNode;
};

export default function PaymentLaoyout({ children }: Props) {
  const { amount, paymentStatus, cet } = usePaymentContext();

  const pixAmount = (amount?.amount ?? 0) / 2;
  const creditCardAmount = (amount?.amount ?? 0) - pixAmount;

  const pixOrCreditCardSelected =
    paymentStatus === '4-pix-type-selected' ? 'pix' : 'credit-card';
  const completedSteps =
    paymentStatus === '5-pix-confirmed' ? ['pix' as const] : [];

  return (
    <MainContent>
      {children}
      <PaymentInfo
        identifier="123"
        cet={cet}
        firstAmount={pixAmount}
        secondAmount={creditCardAmount}
        completedSteps={completedSteps}
        activeStep={pixOrCreditCardSelected}
      />
    </MainContent>
  );
}
