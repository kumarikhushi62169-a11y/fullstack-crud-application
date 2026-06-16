export default function AdminPanel({ users }) {

  const latestUser =
    users.length > 0
      ? users[users.length - 1].name
      : "No User";

  const oldUser =
    users.length > 0
      ? users[0].name
      : "No User";

  return (

    <div className="bg-white p-8 rounded-2xl shadow-md">

      {/* HEADER UPDATED */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        User Management Admin Panel
      </h1>
      <p className="text-gray-500 mb-8">
        Overview of registered users and system status
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Registered Users */}
        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md 
                        hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer">

          <h2 className="text-xl font-semibold mb-3">
            Registered Users
          </h2>

          <p className="text-5xl font-bold">
            {users.length}
          </p>

        </div>

        {/* Latest User */}
        <div className="bg-green-600 text-white p-6 rounded-2xl shadow-md 
                        hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer">

          <h2 className="text-xl font-semibold mb-3">
            Latest User
          </h2>

          <p className="text-3xl font-bold">
            {latestUser}
          </p>

        </div>

        {/* Old User */}
        <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow-md 
                        hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer">

          <h2 className="text-xl font-semibold mb-3">
            First User
          </h2>

          <p className="text-3xl font-bold">
            {oldUser}
          </p>

        </div>

        {/* System Status */}
        <div className="bg-red-500 text-white p-6 rounded-2xl shadow-md 
                        hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer">

          <h2 className="text-xl font-semibold mb-3">
            System Status
          </h2>

          <p className="text-3xl font-bold">
            Running
          </p>

        </div>

      </div>

    </div>

  );

}