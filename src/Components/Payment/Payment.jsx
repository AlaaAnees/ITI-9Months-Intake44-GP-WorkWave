import React, { useRef, useEffect } from "react";

export default function Paypal({ price, hi, sh }) {
  const paypalBtn = useRef(null);

  useEffect(() => {
    const renderPayPalButton = () => {
      if (!window.paypal) return;

      window.paypal
        .Buttons({
          style: {
            layout: "horizontal",
            color: "black",
            shape: sh,
            label: "pay",
            height: hi,
          },
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Cool looking table",
                  amount: {
                    currency_code: "USD",
                    value: price,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                "Payment Made Successfully " +
                  details.payer.name.given_name +
                  " !"
              );
            });
          },
          onError: (err) => {
            console.error("PayPal Button Error:", err);
          },
        })
        .render(paypalBtn.current);
    };

    if (paypalBtn.current) {
      paypalBtn.current.textContent = "";
      renderPayPalButton();
    }

    return () => {
      // Proper cleanup of the PayPal button
      if (paypalBtn.current && window.paypal) {
        window.paypal.Buttons().close();
      }
    };
  }, [price, hi, sh]);

  return (
    <div className="relative inline-block mx-20 mt-5">
      <div
        className="relative"
        ref={paypalBtn}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {/* Optional: You can remove this button if it's not necessary */}
        {/* <button onClick={() => paypalBtn.current.children[0].click()}></button> */}
      </div>
    </div>
  );
}

// =====================================================
// import React, { useRef, useEffect } from "react";

// export default function Paypal({ price, hi, sh }) {
//   const paypalBtn = useRef(null);

//   useEffect(() => {
//     if (paypalBtn.current) {
//       paypalBtn.current.textContent = "";
//       const renderPayPalButton = () => {
//         window.paypal
//           .Buttons({
//             style: {
//               layout: "horizontal",
//               color: "black",
//               shape: sh,
//               label: "pay",
//               height: hi,
//             },
//             createOrder: (data, actions, err) => {
//               return actions.order.create({
//                 intent: "CAPTURE",
//                 purchase_units: [
//                   {
//                     description: "Cool looking table",
//                     amount: {
//                       currency_code: "USD",
//                       value: price,
//                     },
//                   },
//                 ],
//               });
//             },
//             onApprove: (data, actions) => {
//               return actions.order.capture().then(async (details) => {
//                 alert(
//                   "Payment Made Successfully " +
//                     details.payer.name.given_name +
//                     " !"
//                 );
//               });
//             },
//             onError: (err) => {
//               console.error("PayPal Button Error:", err);
//             },
//           })
//           .render(paypalBtn.current);
//       };

//       // Render the PayPal button if the container is still in the DOM
//       if (document.body.contains(paypalBtn.current)) {
//         renderPayPalButton();
//       }

//       return () => {
//         // Clean up the PayPal button if the component is unmounted
//         if (paypalBtn.current && window.paypal) {
//           window.paypal.Buttons().close();
//         }
//       };
//     }
//   }, [price, hi, sh]);

//   return (
//     <div className="relative inline-block mx-20 mt-5">
//       <div
//         className="relative"
//         ref={paypalBtn}
//         onClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//       >
//         <button onClick={() => paypalBtn.current.children[0].click()}></button>
//       </div>
//     </div>
//   );
// }

// ============================
// import React, { useRef, useEffect } from "react";

// export default function Paypal({ price, hi, sh }) {
//   const paypalBtn = useRef(null);

//   useEffect(() => {
//     paypalBtn.current.textContent = "";
//     window.paypal
//       .Buttons({
//         style: {
//           layout: "horizontal",
//           color: "black",
//           shape: sh,
//           label: "pay",
//           height: hi,
//         },
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 description: "Cool looking table",
//                 amount: {
//                   currency_code: "USD",
//                   value: price,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then(async (details) => {
//             alert(
//               "Payment Made Successfully " +
//                 details.payer.name.given_name +
//                 " !"
//             );
//           });
//         },
//       })
//       .render(paypalBtn.current);
//   }, [price, hi, sh]);

//   return (
//     <div className="relative inline-block  mx-20 mt-5">
//       <div
//         className="relative"
//         ref={paypalBtn}
//         onClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//       >
//         <button onClick={() => paypalBtn.current.children[0].click()}></button>
//       </div>
//     </div>
//   );
// }

// =======================================================================

// import React, { useRef, useEffect } from "react";

// export default function Paypal() {
//   const paypalBtn = useRef(null);

//   useEffect(() => {
//     paypalBtn.current.textContent = "";
//     window.paypal
//       .Buttons({
//         style: {
//           layout: "vertical", // use horizontal layout to easily hide the default button
//           color: "blue",
//           shape: "pill",
//           label: "paypal",
//           height: 40,
//         },
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 description: "Cool looking table",
//                 amount: {
//                   currency_code: "USD",
//                   value: 1.0,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then(async (details) => {
//             // await checkout();
//             alert(
//               "Payment Made Successfully " +
//                 details.payer.name.given_name +
//                 " !"
//             );
//           });
//         },
//       })
//       .render(paypalBtn.current);
//   }, []);

//   return (
//     <div>
//       <div
//         className=""
//         id="paypal-btn"
//         ref={paypalBtn}
//         onClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//       >
//         <button
//           className=" "
//           onClick={() => paypalBtn.current.children[0].click()}
//         ></button>
//       </div>
//     </div>
//   );
// }

// <img
//           src="./assets/cart.svg"
//           alt=""
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//           }}
//         />
