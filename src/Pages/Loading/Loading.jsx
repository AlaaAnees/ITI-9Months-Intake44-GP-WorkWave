const Loading = ({ background = "blue-100" }) => {
  return (
    <section
      className={`overflow-hidden flex justify-center w-100 h-screen items-center bg-${background}`}
    >
      <div className="blob"></div>
    </section>
  );
};

export default Loading;
