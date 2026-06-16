export default function ViewUsers({ users }) {
return ( <div className="bg-slate-100 min-h-screen p-6 rounded-3xl">
  <div className=" p-8 rounded-3xl  bg-white shadow-xl border border-gray-200">


  {/* Header */}
  <div className="bg-blue-600 text-white cursor-pointer  p-6 rounded-2xl shadow-lg mb-8">
    <h1 className="text-3xl font-bold">
      User Directory
    </h1>

    <p className="text-sm mt-2 text-blue-100">
      Manage and view all registered users
    </p>
  </div>

  {/* Main Container */}

    {/* User Cards */}
    <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-5">

      {users.map((user) => (
        <div
          key={user.id}
          className=" bg-gray-100 p-6  cursor-pointer rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >

          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800">
            {user.name}
          </h2>

          {/* Email */}
          <p className="mt-3 text-gray-600">
            📧 {user.email}
          </p>

          {/* Mobile */}
          <p className="mt-1 text-gray-600">
            📱 {user.mobile}
          </p>

          {/* Role & Status */}
          <div className="flex gap-2 mt-4 flex-wrap">

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              {user.role}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : user.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : user.status === "Blocked"
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {user.status}
            </span>

          </div>

          {/* Age */}
          <p className="text-gray-600 mt-4">
            🎂 Age: {user.age}
          </p>

          {/* Joining Date */}
          <p className="text-gray-500 text-sm mt-4 border-t pt-3">
            📅 Joined:{" "}
            {new Date(user.joiningDate).toLocaleDateString("en-GB")}
          </p>

        </div>
      ))}

    </div>

  </div>

</div>


);
}
