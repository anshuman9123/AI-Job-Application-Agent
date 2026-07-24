import React from "react";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div className={`${color} text-white text-3xl p-4 rounded-xl`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;