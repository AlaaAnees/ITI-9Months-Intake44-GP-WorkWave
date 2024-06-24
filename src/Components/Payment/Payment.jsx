import React, { useRef, useEffect } from "react";

export default function Paypal({ price, hi, sh }) {
  const paypalBtn = useRef(null);

  useEffect(() => {
    paypalBtn.current.textContent = "";
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
          return actions.order.capture().then(async (details) => {
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
    <div className="relative inline-block  mx-20 mt-5">
      <div
        className="relative"
        ref={paypalBtn}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button onClick={() => paypalBtn.current.children[0].click()}></button>
      </div>
    </div>
  );
}

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
