import { useEffect, useState } from "react";

function Order() {
  const [orderList, setOrderList] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await fetch(
          `https://workwave-vq08.onrender.com/api/orders`,
          {
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setOrderList(data.data.orders);
        console.log(data.data.orders, "order");
      } catch (err) {
        return err;
      }
    }
    fetchOrder();
  }, [token]);
  return (
    <ul className="container p-8 mx-auto">
      {orderList.map((order) => (
        <li key={order._id}>
          <img src={order.img} alt={order.title} />
          <span>{order.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default Order;
