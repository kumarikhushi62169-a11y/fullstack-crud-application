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

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Admin Panel
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        
        <div className="bg-blue-600 text-white p-6 rounded-2xl">

          <h2 className="text-xl font-semibold mb-3">
            Total Users
          </h2>

          <p className="text-5xl font-bold">
            {users.length}
          </p>

        </div>

        
        <div className="bg-green-600 text-white p-6 rounded-2xl">

          <h2 className="text-xl font-semibold mb-3">
            Latest User
          </h2>

          <p className="text-3xl font-bold">
            {latestUser}
          </p>

        </div>

        
        <div className="bg-yellow-500 text-white p-6 rounded-2xl">

          <h2 className="text-xl font-semibold mb-3">
            Old User
          </h2>

          <p className="text-3xl font-bold">
            {oldUser}
          </p>

        </div>

        
        <div className="bg-red-500 text-white p-6 rounded-2xl">

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