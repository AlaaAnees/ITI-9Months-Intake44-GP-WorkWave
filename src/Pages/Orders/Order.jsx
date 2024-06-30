/* import { useEffect, useState, useMemo, useCallback } from "react";
import Paypal from "../../Components/Payment/Payment";
import Contact from "../../Components/Contact/Contact";

function Order() {
  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(1);
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  const fetchOrder = useCallback(async () => {
    try {
      const res = await fetch(`https://gp-workwave-production.up.railway.app/api/orders`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setOrderList(data.data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  }, [token]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const calculatedTotalPrice = useMemo(() => {
    return orderList.reduce((sum, order) => sum + order.price, 0);
  }, [orderList]);

  useEffect(() => {
    setTotalPrice(calculatedTotalPrice);
  }, [calculatedTotalPrice]);

  const deleteOrder = async (orderId) => {
    try {
      await fetch(
        `https://gp-workwave-production.up.railway.app/api/orders/delete/${orderId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setOrderList(orderList.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Failed to delete the order", err);
    }
  };

  return (
    <>
      <div className="parent min-h-screen">
        <div className="container mx-auto px-4">
          {orderList.map((order) => (
            <div
              key={order._id}
              className="text-slate-700 py-3 sm:py-0 w-full sm:w-[80%] mx-auto flex flex-col sm:flex-row sm:justify-around justify-between gap-2 sm:gap-0 items-center my-5 bg-white rounded-lg shadow-md shadow-slate-200"
            >
              <div className="image w-20 h-20 sm:w-10 sm:h-10">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={order.img}
                  alt={order.title}
                />
              </div>
              <h3 className="font-semibold text-center sm:text-left">
                {order.title.slice(0, 15)}
              </h3>
              <h3 className="font-semibold text-center sm:text-left">
                price: {order.price}$
              </h3>
              <div className="contact">
                <Contact
                  IDs={{ sellerId: order.sellerId, buyerId: order.buyerId }}
                />
              </div>
              <button
                onClick={() => deleteOrder(order._id)}
                className="w-16 px-4 py-2 rounded"
              >
                <img className="w-full" src="assets/delete.png" alt="delete" />
              </button>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[80%] mx-auto my-10">
            <div className="text-lg font-semibold text-slate-700 text-center sm:text-left">
              Total Price: {totalPrice}$
            </div>
            <div className="mt-4 sm:mt-0">
              <Paypal price={totalPrice} hi={40} sh={"rect"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
 */

/* import { useEffect, useState, useMemo, useCallback } from "react";
import Paypal from "../../Components/Payment/Payment";
import Contact from "../../Components/Contact/Contact";

function Order() {
  const [orderList, setOrderList] = useState([]);
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  const fetchOrder = useCallback(async () => {
    try {
      const res = await fetch(`https://gp-workwave-production.up.railway.app/api/orders`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setOrderList(data.data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  }, [token]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const calculatedTotalPrice = useMemo(() => {
    return orderList.reduce((sum, order) => sum + order.price, 0);
  }, [orderList]);

  const deleteOrder = async (orderId) => {
    try {
      const res = await fetch(
        `https://gp-workwave-production.up.railway.app/api/orders/delete/${orderId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete the order");
      }

      setOrderList((prevOrderList) =>
        prevOrderList.filter((order) => order._id !== orderId)
      );
    } catch (err) {
      console.error("Failed to delete the order", err);
    }
  };

  return (
    <div className="parent min-h-screen">
      <div className="container mx-auto px-4">
        {orderList.map((order) => (
          <div
            key={order._id}
            className="text-slate-700 py-3 sm:py-0 w-full sm:w-[80%] mx-auto flex flex-col sm:flex-row sm:justify-around justify-between gap-2 sm:gap-0 items-center my-5 bg-white rounded-lg shadow-md shadow-slate-200"
          >
            <div className="image w-20 h-20 sm:w-10 sm:h-10">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={order.img}
                alt={order.title}
              />
            </div>
            <h3 className="font-semibold text-center sm:text-left">
              {order.title.slice(0, 15)}
            </h3>
            <h3 className="font-semibold text-center sm:text-left">
              Price: {order.price}$
            </h3>
            <div className="contact">
              <Contact
                IDs={{ sellerId: order.sellerId, buyerId: order.buyerId }}
              />
            </div>
            <button
              onClick={() => deleteOrder(order._id)}
              className="w-16 px-4 py-2 rounded"
            >
              <img className="w-full" src="assets/delete.png" alt="delete" />
            </button>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[80%] mx-auto my-10">
          <div className="text-lg font-semibold text-slate-700 text-center sm:text-left">
            Total Price: {calculatedTotalPrice}$
          </div>
          <div className="mt-4 sm:mt-0">
            <Paypal price={calculatedTotalPrice} hi={40} sh={"rect"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
 */

import { useEffect, useState, useMemo, useCallback } from "react";
import Paypal from "../../Components/Payment/Payment";
import Contact from "../../Components/Contact/Contact";

function Order() {
  const [orderList, setOrderList] = useState([]);
  const token = useMemo(() => JSON.parse(localStorage.getItem("token")), []);

  const fetchOrder = useCallback(async () => {
    try {
      const res = await fetch(
        `https://gp-workwave-production.up.railway.app/api/orders`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setOrderList(data.data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  }, [token]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const calculatedTotalPrice = useMemo(() => {
    return orderList.reduce((sum, order) => sum + order.price, 0);
  }, [orderList]);

  // Calculate 20% revenue
  const revenue = calculatedTotalPrice * 0.2;

  const deleteOrder = async (orderId) => {
    try {
      const res = await fetch(
        `https://gp-workwave-production.up.railway.app/api/orders/delete/${orderId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete the order");
      }

      setOrderList((prevOrderList) =>
        prevOrderList.filter((order) => order._id !== orderId)
      );
    } catch (err) {
      console.error("Failed to delete the order", err);
    }
  };

  return (
    <div className="parent min-h-screen">
      <div className="container mx-auto px-4">
        {orderList.map((order) => (
          <div
            key={order._id}
            className="text-slate-700 py-3 sm:py-0 w-full sm:w-[80%] mx-auto flex flex-col sm:flex-row sm:justify-around justify-between gap-2 sm:gap-0 items-center my-5 bg-white rounded-lg shadow-md shadow-slate-200"
          >
            <div className="image w-20 h-20 sm:w-10 sm:h-10">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={order.img}
                alt={order.title}
              />
            </div>
            <h3 className="font-semibold text-center sm:text-left">
              {order.title.slice(0, 15)}
            </h3>
            <h3 className="font-semibold text-center sm:text-left">
              Price: {order.price}$
            </h3>
            <div className="contact">
              <Contact
                IDs={{ sellerId: order.sellerId, buyerId: order.buyerId }}
              />
            </div>
            <button
              onClick={() => deleteOrder(order._id)}
              className="w-16 px-4 py-2 rounded"
            >
              <img className="w-full" src="assets/delete.png" alt="delete" />
            </button>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[80%] mx-auto my-10">
          <div className="text-lg font-semibold text-slate-700 text-center sm:text-left">
            Total Price: {calculatedTotalPrice}$
          </div>
          <div className="text-lg font-semibold text-slate-700 text-center sm:text-left">
            Website Revenue (20%): {revenue.toFixed(2)}$
          </div>
          <div className="mt-4 sm:mt-0">
            <Paypal price={calculatedTotalPrice} hi={40} sh={"rect"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
