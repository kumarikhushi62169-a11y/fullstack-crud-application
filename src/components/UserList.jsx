import { Pencil, Trash2, Eye } from "lucide-react";

export default function UserList({
  users,
  search,
  deleteUser,
  editUser,
  viewUser,
}) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(users);
console.log(typeof users);
console.log(Array.isArray(users));
  return (
    <div className="bg-white p-6  shadow-lg rounded-2xl">
      <div className="flex   justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          User List
        </h2>
      </div>

      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">#</th>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>
              <th className="p-4 text-left">
                mobile No.
              </th>
              

              <th className="p-4 text-left">
                Age
              </th>
              <th className="p-4 text-left">
                Role
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-left">
                Date
              </th>
              

              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className={`border-t border-gray-300 transition duration-300 ${
                    search &&
                    user.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                      ? "bg-yellow-100"
                      : "hover:bg-amber-50"
                  }`}
                >
                  {/* Original Serial Number */}
                  <td className="p-4 font-bold">
                    {users.findIndex(
                      (u) => u.id === user.id
                    ) + 1}
                  </td>

                  <td className="p-4 font-bold text-gray-700">
                    {user.name}
                  </td>

                  <td className="p-4 font-bold text-gray-700">
                    {user.email}
                  </td>

                  <td className="p-4 font-bold text-gray-700">
                    {user.mobile}
                  </td>


                  <td className="p-4 font-bold text-gray-700">
                    {user.age}
                  </td>
                  <td className="p-4 font-bold text-gray-700">
                    {user.role}
                  </td>

                  <td className="p-4 font-bold text-gray-700">
                    {user.status}
                  </td>

                 <td className="p-4 font-bold text-gray-700  whitespace-nowrap">
                  {new Date(user.joiningDate).toLocaleDateString()}
                      </td>


                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => viewUser(user)}
                        className="bg-green-200 active:scale-95 hover:scale-110 border border-green-400 hover:bg-green-300 text-white p-2 py-2 rounded-lg transition duration-300"
                      >
                        <Eye size={16}  color="green"/>
                      </button>

                      <button
                        onClick={() => editUser(user)}
                        className="bg-yellow-200 border border-amber-400  active:scale-95 hover:scale-110 hover:bg-yellow-300 text-white p-2 rounded-lg  py-2 transition duration-300"
                      >
                        <Pencil size={16} color="gray" />
                      </button>

                      <button
                        onClick={() => deleteUser(user.id)}
                        className=" active:scale-95 hover:scale-110  bg-red-200 hover:bg-red-300 text-white p-2 py-2 border border-red-400 rounded-lg transition duration-300"
                      >
                        <Trash2 size={16} color="red" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-6 text-gray-500 text-lg"
                >
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


