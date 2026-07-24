import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

import {
  FaFileAlt,
  FaRobot,
  FaChartLine,
  FaBriefcase,
  FaUpload,
  FaSearch,
  FaMagic,
  FaCheckCircle,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Navbar />

        <div className="p-8">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-slate-800">
            Welcome back 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Here's an overview of your AI Job Application Agent.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            <StatCard
              title="Resumes"
              value="05"
              icon={<FaFileAlt />}
              color="bg-blue-600"
            />

            <StatCard
              title="ATS Score"
              value="89%"
              icon={<FaChartLine />}
              color="bg-green-600"
            />

            <StatCard
              title="AI Generated"
              value="12"
              icon={<FaRobot />}
              color="bg-purple-600"
            />

            <StatCard
              title="Jobs Applied"
              value="18"
              icon={<FaBriefcase />}
              color="bg-orange-500"
            />
          </div>



          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Link
                to="/upload"
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer block"
                >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <FaUpload className="text-blue-600 text-2xl" />
                </div>

                <h2 className="text-xl font-bold">Upload Resume</h2>

                <p className="text-slate-500 mt-2">
                    Upload your resume for ATS analysis and AI optimization.
                </p>
                </Link>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FaSearch className="text-green-600 text-2xl" />
              </div>

              <h2 className="text-xl font-bold">ATS Analysis</h2>

              <p className="text-slate-500 mt-2">
                Analyze how well your resume matches the job description.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FaMagic className="text-purple-600 text-2xl" />
              </div>

              <h2 className="text-xl font-bold">Generate Resume</h2>

              <p className="text-slate-500 mt-2">
                Let AI generate a customized resume based on the job description.
              </p>
            </div>
          </div>



                  {/* Recent Activity */}


        <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaCheckCircle className="text-green-600" />
              </div>

              <div>
                <p className="font-semibold">
                  Resume uploaded successfully
                </p>

                <p className="text-sm text-slate-500">
                  5 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaCheckCircle className="text-blue-600" />
              </div>

              <div>
                <p className="font-semibold">
                  ATS analysis completed
                </p>

                <p className="text-sm text-slate-500">
                  Today, 10:45 AM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaCheckCircle className="text-purple-600" />
              </div>

              <div>
                <p className="font-semibold">
                  AI generated a tailored resume
                </p>

                <p className="text-sm text-slate-500">
                  Yesterday
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;