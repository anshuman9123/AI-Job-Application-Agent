function Navbar() {
  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
        Logout
      </button>

    </div>
  );
}

export default Navbar;