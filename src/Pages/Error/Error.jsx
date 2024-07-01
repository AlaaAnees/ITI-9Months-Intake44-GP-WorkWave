import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <section className="h-screen flex  justify-center items-center">
      <div className="w-2/4   flex flex-col gap-9 justify-center items-center">
        <div className=" text-2xl ">{error.message || error.data}</div>
        <img
          src="../../../public/assets/imgs/logo-no-background 5.png"
          alt="workwave logo"
        />
        <Link
          to=""
          className="border border-blue-400
         sub-font-2  p-3 block rounded-full 
         text-center transition-all duration-300 hover:bg-white hover:text-blue-400"
        >
          Back to workwave
        </Link>
      </div>
    </section>
  );
}

export default Error;
