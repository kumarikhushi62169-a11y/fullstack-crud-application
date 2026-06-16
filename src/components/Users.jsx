import React from "react";

export default function Users({ users = [] }) {
return ( <div className="space-y-8">

 <div className=" p-8 rounded-3xl  bg-white shadow-xl border border-gray-200">
  
<h1 className="text-3xl mb-7 font-bold text-gray-800"> Status And Role Of The Student</h1>



<div className=" bg-blue-600 text-white p-8 cursor-pointer   hover:shadow-xl hover:-translate-y-1    transition duration-300 rounded-3xl shadow-xl">
  <h3 className="text-lg font-semibold">
    Total Users
  </h3>

  <p className="text-5xl font-bold mt-3">
    {users.length}
  </p>
</div>



  {/* User Status Section */}
  <div>
    <h2 className="text-2xl mt-5 font-bold text-gray-700 mb-4">
      User Status
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      <div className="bg-gray-400 rounded-3xl  cursor-pointer p-6 shadow-md hover:shadow-xl hover:-translate-y-1    transition duration-300 border border-red-100">
           <h3 className="text-white  text-sm font-semibold">
                       Blocked Users
              </h3>

           <p className="text-4xl font-bold text-white mt-3">
                 {users.filter(
                   (u) => u.status === "Blocked"
                                    ).length}
                </p>
              </div>

      <div className="bg-green-500 rounded-3xl   cursor-pointer p-6 shadow-md hover:shadow-xl  hover:-translate-y-1 transition duration-300 border border-green-100">
        <h3 className="text-white text-sm font-semibold">
          Active Users
        </h3>

        <p className="text-4xl font-bold text-white mt-3">
          {users.filter(
            (u) => u.status === "Active"
          ).length}
        </p>
      </div>

      <div className="bg-amber-400   cursor-pointer rounded-3xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300 border border-gray-200">
        <h3 className="text-white text-sm font-semibold">
          Inactive Users
        </h3>

        <p className="text-4xl font-bold text-white mt-3">
          {users.filter(
            (u) => u.status === "Inactive"
          ).length}
        </p>
      </div>

      <div className="bg-red-500  cursor-pointer rounded-3xl p-6 shadow-md  hover:-translate-y-1 hover:shadow-xl transition duration-300 border border-yellow-100">
        <h3 className="text-white text-sm font-semibold">
          Pending Users
        </h3>

        <p className="text-4xl font-bold text-white mt-3">
          {users.filter(
            (u) => u.status === "Pending"
          ).length}
        </p>
      </div>

    </div>
  </div>

  {/* User Roles Section */}
  <div>
    <h2 className="text-2xl  mt-5 font-bold text-gray-700 mb-4">
      User Roles
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      <div className="bg-indigo-500 text-white p-6  cursor-pointer hover:-translate-y-1 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-sm uppercase tracking-wide">
          Admins
        </h3>

        <p className="text-4xl font-bold mt-3">
          {users.filter(
            (u) => u.role === "Admin"
          ).length}
        </p>
      </div>

      <div className="bg-purple-500 text-white p-6 cursor-pointer hover:-translate-y-1 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-sm uppercase tracking-wide">
          Managers
        </h3>

        <p className="text-4xl font-bold mt-3">
          {users.filter(
            (u) => u.role === "Manager"
          ).length}
        </p>
      </div>

      <div className="bg-orange-500 text-white p-6 cursor-pointer hover:-translate-y-1 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-sm uppercase tracking-wide">
          Editors
        </h3>

        <p className="text-4xl font-bold mt-3">
          {users.filter(
            (u) => u.role === "Editor"
          ).length}
        </p>
      </div>

      <div className="bg-cyan-500 text-white p-6 cursor-pointer hover:-translate-y-1 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-sm uppercase tracking-wide">
          Users
        </h3>

        <p className="text-4xl font-bold mt-3">
          {users.filter(
            (u) => u.role === "User"
          ).length}
        </p>
      </div>

    </div>
  </div>

  

    
  

</div>
</div>
);
}
