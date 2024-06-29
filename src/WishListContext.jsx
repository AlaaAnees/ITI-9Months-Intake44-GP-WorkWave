import { createContext, useState, useEffect } from "react";

const WishContex = createContext();

function WishProvider({ children }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    async function getUserFav() {
      const res = await fetch(
        `https://workwave-vq08.onrender.com/api/favorites`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setFavoriteList(data.data?.userFavorites);
    }
    getUserFav();
  }, [token]);

  function handleAddToWishlist(data) {
    setFavoriteList(data);
  }

  return (
    <WishContex.Provider value={{ favoriteList, handleAddToWishlist }}>
      {children}
    </WishContex.Provider>
  );
}

export { WishContex, WishProvider };
