import {
  FaHome,
  FaFileUpload,
  FaBriefcase,
  FaRobot,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        AI Job Agent
      </h1>

      <ul className="space-y-6">

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaHome />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaFileUpload />
          Resume
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaBriefcase />
          Jobs
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaRobot />
          AI Resume
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaUser />
          Profile
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;