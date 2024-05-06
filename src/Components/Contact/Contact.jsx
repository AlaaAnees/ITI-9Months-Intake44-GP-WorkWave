import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router";
import newRequest from "../../Utils/newRequist";
import { AuthContext } from "../../Context/authContext";

const Contact = () => {
  const [ordersData, setOrdersData] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("##########", ordersData);

  // console.log("from Contact:::::::::", currentUser);
  // const handleContact = async () => {};
  const fetchConversations = async () => {
    try {
      // Fetch data from the conversation endpoint with the token included in the headers
      const response = await fetch(
        "https://workwave-vq08.onrender.com/api/orders",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIxYjZjZWExNDk2MjNmNmY0NjZhMzEiLCJpc1NlbGxlciI6ZmFsc2UsImlhdCI6MTcxMzYxNzUxNX0.mfXh5L-qHatfcvXZjbA77sMOkC-OcDZYi8fXGeA-Cdw`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      console.log("from contact:", response); //for check 🧪

      if (!response.ok) {
        throw new Error("Failed to fetch conversations");
      }

      const jsonData = await response.json();

      console.log("form fetch: ", jsonData); //for check 🧪

      // Set the fetched data to the state
      setOrdersData(jsonData.data.orders);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);
  console.log("data from orderrrrrrrrrrrrrs", ordersData);

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    console.log("Selller id >>>>>>>>>>", sellerId);
    console.log("Buyer id >>>>>>>>>>", buyerId);
    console.log("id >>>>>>>>>>", id);

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };
  return (
    <>
      <div className="contact w-[35px] h-[35px] m-2">
        <img
          className="message w-full"
          src="./assets/message.png"
          alt="message icon"
          onClick={() => handleContact(ordersData)}
        />
      </div>
    </>
  );
};

export default Contact;
