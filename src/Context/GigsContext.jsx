// import { createContext, useContext, useEffect, useReducer } from "react";
// const BASE_URL = "https://workwave-vq08.onrender.com";
// const GigContext = createContext();
// const initalstate = {
//   gigs: [],
//   isloading: false,
//   specificGig: "",
//   error: "",
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "loading":
//       console.log("test");
//       return { ...state, isloading: true, error: "" };
//     case "rejected":
//       return { ...state, error: action.payload };
//     case "gigs/loaded":
//       console.log("test2");
//       return { ...state, gigs: action.payload, isloading: false };
//     //   i need back to send gigs again after deletion
//     case "gigs/delete":
//       return { ...state, gigs: action.payload };
//     case "gigs/loadSpecificGig":
//       return { ...state, specificGig: action.payload, isloading: false };

//     default:
//       throw new Error("undefined gig action");
//   }
// }

// async function getAllGigs(dispatch, cat = "", min = "", max = "") {
//   dispatch({ type: "loading" });

//   try {
//     const res = await fetch(
//       `${BASE_URL}/api/gigs?cat=${cat}&min=${min}&max=${max}`
//     );
//     const data = await res.json();
//     dispatch({ type: "gigs/loaded", payload: data });
//   } catch {
//     dispatch({
//       type: "rejected",
//       payload: "There was an error loading cities...",
//     });
//   }
// }

// export default function GigContextProvider({ children }) {
//   const [{ gigs, isloading }, dispatch] = useReducer(reducer, initalstate);

//   // useEffect(() => {
//   //   getAllGigs(dispatch);
//   // }, []);

//   async function getspecificCategory() {}
//   async function getGigById(id) {}
//   async function deleteGig(id) {}
//   async function createNewGig() {}

//   return (
//     <GigContext.Provider
//       value={{
//         dispatch,
//         getAllGigs,
//         createNewGig,
//         getGigById,
//         getspecificCategory,
//         deleteGig,
//         gigs,
//         isloading,
//       }}
//     >
//       {children}
//     </GigContext.Provider>
//   );
// }

// export function useGig() {
//   const context = useContext(GigContext);
//   if (context === undefined) throw new Error("using gigcontext out of scope");
//   return context;
// }
import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "https://workwave-vq08.onrender.com";
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
  // console.log("eamannamam");
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
  // console.log("cat", cat);
  const dispatch = () => {}; // Placeholder dispatch function, not used in this context
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
