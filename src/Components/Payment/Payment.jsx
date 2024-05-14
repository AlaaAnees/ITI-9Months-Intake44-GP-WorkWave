// import { useState } from "react";

// function Payment() {
//   const [clientSecret, setClientSecret] = useState("");
//   return (
//     <>
//       <div className="w-20">
//         <button>
//           <img className="w-full" src="./assets/cart.svg" alt="" />
//         </button>
//       </div>
//     </>
//   );
// }

// export default Payment;

// import { useEffect, useRef } from "react";

// const Payment = ({ totalAmount }) => {
//   const paypalBtn = useRef(null);
//   useEffect(() => {
//     paypalBtn.current.textContent = "";
//     window.paypal
//       .Buttons({
//         createOrder: (order, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: totalAmount,
//                   currency: "USD",
//                 },
//               },
//             ],
//           });
//         },
// onApprove: (data, actions) => {
//   return actions.order.capture().then(async (details) => {
//     // await checkout();
//     alert(
//       "Payment Made Successfully " +
//         details.payer.name.given_name +
//         " !"
//     );
//   });
// },
//       })
//       .render("#paypal-btn");
//   }, []);

//   return (
//     <div
//       id="paypal-btn"
//       ref={paypalBtn}
//       onClick={(e) => {
//         e.preventDefault();
//         e.stopPropagation();
//       }}
//     ></div>
//   );
// };

// export default Payment;

import React, { useRef, useEffect } from "react";

export default function Paypal() {
  const paypalBtn = useRef(null);

  useEffect(() => {
    paypalBtn.current.textContent = "";
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 1.0,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(async (details) => {
            // await checkout();
            alert(
              "Payment Made Successfully " +
                details.payer.name.given_name +
                " !"
            );
          });
        },
      })
      .render(paypalBtn.current);
  }, []);

  return (
    <div>
      <div
        id="paypal-btn"
        ref={paypalBtn}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
}
