import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12">

      <div className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-xl p-12 space-y-6">

        {/* Icon */}
        <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-md">
          <FiAlertTriangle className="text-5xl text-red-500" />
        </div>

        {/* 404 Number */}
        <h1 className="text-6xl font-bold text-gray-800">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
          Sorry, the page you are looking for doesn't exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-4 px-6 py-2 bg-[#244D3F] text-white rounded-lg shadow hover:bg-[#1e3f33] transition"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;