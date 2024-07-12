import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const clientId = 'YOUR_CLIENT_ID';

function Payment() {
  const onSuccess = (payment) => {
    alert('Payment successful!', payment);
  };

  const onError = (error) => {
    console.error('Payment error!', error);
  };

  return (
    <PayPalScriptProvider clientId={clientId}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            application_context: {
              user_action: 'PAY_NOW',
            },

            purchase_units: [
                {
                    amount: {
                    currency_code: 'USD',
                    value: '1.00', 
                    },
                    description: 'Profile Upgrade',
                },
                ]

          });
        }}
        onSuccess={onSuccess}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}

export default Payment;
