import { useNavigate } from "react-router-dom";

const SuccessModal = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      {/* Modal */}
      <div className="bg-white rounded-lg overflow-hidden shadow-xl w-96">
        {/* Header */}
        <div className="bg-blue-500 p-4">
          <h2 className="text-white text-lg font-bold">
            Registration Successful!
          </h2>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-700">Go To The Login Page</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
