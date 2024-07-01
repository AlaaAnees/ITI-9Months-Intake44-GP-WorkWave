import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "https://gp-workwave-production.up.railway.app";
const GigContext = createContext();

const initialState = {
  gigs: [],
  isLoading: false,
  specificGig: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "rejected":
      return { ...state, error: action.payload };
    case "gigs/loaded":
      return { ...state, gigs: action.payload, isLoading: false };
    case "gigs/delete":
      return { ...state, gigs: action.payload };
    case "gigs/loadSpecificGig":
      return { ...state, specificGig: action.payload, isLoading: false };
    default:
      throw new Error("Undefined gig action");
  }
}

async function fetchGigs(dispatch, cat = "", min = "", max = "") {
  dispatch({ type: "loading" });
  try {
    const res = await fetch(`${BASE_URL}/api/gigs?cat=${cat}`);
    const data = await res.json();
    dispatch({ type: "gigs/loaded", payload: data });
  } catch {
    dispatch({
      type: "rejected",
      payload: "There was an error loading gigs...",
    });
  }
}

export async function fetchGigsOutsideContext(cat = "", min = "", max = "") {
  const dispatch = () => {};
  await fetchGigs(dispatch, cat, min, max);
}

export default function GigContextProvider({ children }) {
  const [{ gigs, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchGigs(dispatch);
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
        isLoading,
      }}
    >
      {children}
    </GigContext.Provider>
  );
}

export function useGig() {
  const context = useContext(GigContext);
  if (context === undefined) throw new Error("Using gig context out of scope");
  return context;
}
