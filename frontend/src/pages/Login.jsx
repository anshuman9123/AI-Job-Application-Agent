import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl">

        {/* Left Section */}
        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6">
            AI Job Application Agent
          </h1>

          <p className="text-lg leading-8">
            Upload your resume, analyze ATS score, optimize your CV and
            generate job-specific resumes using AI.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-10">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Login
          </h2>

          <form className="space-y-5">

            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-500" />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-4 left-4 text-gray-500" />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;