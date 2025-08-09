import React from 'react';
import ButtonType from '../../../ui/ButtonType/ButtonType';
import { useOnlinePayment } from '../useOnlinePayment';
import SpinnerMini from '../../../ui/SpinnerMini/SpinnerMini';
import { useIsMutating } from '@tanstack/react-query';

export default function OnlinePayment() {
  const { onlinePayment, isOnlinePayment } = useOnlinePayment();
//   const isOnlinePaymentloading = useIsMutating({ mutationKey: ['onlinepayment'] }) > 0;
  function handleOnlinePayment() {
    const allData = {
      shippingAddress: {
        details,
        phone,
        city,
      },
    };
    console.log(allData);
    onlinePayment({ allData });
  }
  return (
    <div>
      <ButtonType
        onClick={handleOnlinePayment}
        type="secondary"
        disabled={isOnlinePayment}
      >
        {!isOnlinePayment ? 'Online Payment' : <SpinnerMini />}
      </ButtonType>
    </div>
  );
}
