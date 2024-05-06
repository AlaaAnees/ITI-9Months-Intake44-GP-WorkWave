import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51PBSmdRpGMDN68ih6VbD4SxLBlR2wyojqbhs3cEVCvtjIhEn34KGA49ftATcVEIXKMX5XlS0T6pbZlOewYcpiLYQ00c16tKaSj"
);

function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  return (
    <>
      <h1>payment</h1>
    </>
  );
}

export default Payment;
