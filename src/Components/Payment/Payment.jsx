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
        className="container mx-auto"
        id="paypal-btn"
        ref={paypalBtn}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      ></div>
      {/* <img
        src="./assets/cart.svg"
        alt=""
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      /> */}
    </div>
  );
}
