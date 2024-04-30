import { createContext, useContext, useEffect, useReducer } from "react";
const BASE_URL = "https://workwave-vq08.onrender.com";
const GigContext = createContext();
const initalstate = {
  gigs: [],
  isloading: false,
  specificGig: "",
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isloading: true, error: "" };
    case "rejected":
      return { ...state, error: action.payload };
    case "gigs/loaded":
      return { ...state, gigs: action.payload, isloading: false };
    //   i need back to send gigs again after deletion
    case "gigs/delete":
      return { ...state, gigs: action.payload };
    case "gigs/loadSpecificGig":
      return { ...state, specificGig: action.payload, isloading: false };

    default:
      throw new Error("undefined gig action");
  }
}
export default function GigContextProvider({ children }) {
  const [{ gigs, isloading }, dispatch] = useReducer(reducer, initalstate);

  useEffect(function () {
    async function getAllGigs() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/api/gigs`);
        const data = await res.json();
        dispatch({ type: "gigs/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    getAllGigs();
  }, []);

  async function getspecificCategory() {}
  async function getGigById(id) {}
  async function deleteGig(id) {}
  async function createNewGig() {}

  return (
    <GigContext.Provider
      value={{
        createNewGig,
        getGigById,
        getspecificCategory,
        deleteGig,
        gigs,
        isloading,
      }}
    >
      {children}
    </GigContext.Provider>
  );
}

export function useGig() {
  const context = useContext(GigContext);
  if (context === undefined) throw new Error("using gigcontext out of scope");
  return context;
}
