import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col font-neueMachina items-center justify-center h-[600px] text-white text-center p-6">
      <h1 className="text-7xl font-extrabold text-red-500 animate-bounce">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Lost in Digital Space?</h2>
      <p className="text-gray-400 mt-2 ">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 border text-white font-semibold rounded-lg shadow-lg  transition duration-300"
      >
        Return to Home
      </Link>
    
    </div>
  );
};

export default NotFound;
