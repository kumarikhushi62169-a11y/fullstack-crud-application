import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import ViewModal from "./components/ViewModal";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";

export default function App() {



  const API = "http://localhost:3000/users";


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  
  const [search, setSearch] = useState("");

  
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);

  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    const res = await axios.get(API);

    setUsers(res.data);

  };

  const addUser = async (user) => {

   if (
  !user.name ||
  !user.email ||
  !user.mobile ||
  !user.role ||
  !user.status ||
  !user.age ||
  !user.joiningDate
) {

      await Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        confirmButtonText: "OK",

        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {

      await Swal.fire({
        icon: "error",
        title: "Invalid Email",
        confirmButtonText: "OK",

        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      return false;
    }
console.log("All Users:", users);
console.log("New Email:", user.email);
    const exists = users.some(
  (u) =>
    u.email.toLowerCase() ===
    user.email.toLowerCase()
);

if (exists) {
  Swal.fire({
    icon: "error",
    title: "Duplicate Email",
    text: "This email already exists",
    confirmButtonColor: "#2563eb",
     allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  });

  return false;

}

if (user.mobile.length !== 10) {
  Swal.fire({
    icon: "error",
    title: "Invalid Mobile Number",
    text: "Mobile number must be 10 digits",
     allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  });

  return false;
}


try {

  const res = await axios.post(API, user);

  setUsers([...users, res.data]);

  await Swal.fire({
    icon: "success",
    title: "User Added",
    text: "User added successfully",
     allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  });
  return true;

} catch (err) {

  await Swal.fire({
    icon: "error",
    title: "Duplicate Email",
    text: "This email already exists",
     allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  });

  return false;
}

  }

  
  const deleteUser = async (id) => {

    const result = await Swal.fire({
      title: "Delete User?",
      icon: "warning",

      showCancelButton: true,

      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });

    if (!result.isConfirmed) return;

    await axios.delete(`${API}/${id}`);

    setUsers(
      users.filter((u) => u.id !== id)
    );

    await Swal.fire({
      icon: "success",
      title: "Deleted!",
      confirmButtonText: "OK",

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });

  };


  const editUser = (user) =>
    setEditingUser(user);

  
  const viewUser = (user) =>
    setSelectedUser(user);

  const updateUser = async (updatedUser) => {

    const res = await axios.put(
      `${API}/${updatedUser.id}`,
      updatedUser
    );
console.log("POST RESPONSE:", res.data);
console.log("API Data:", res.data);

    setUsers(
      users.map((u) =>
        u.id === updatedUser.id
          ? res.data
          : u
      )
    );

    setEditingUser(null);

    await Swal.fire({
      icon: "success",
      title: "Updated",
      confirmButtonText: "OK",

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });

  };

  
  if (!isLoggedIn) {
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  return (

    <div className="flex min-h-screen bg-slate-100">

      {
        sidebarOpen && (

          <Sidebar
            page={page}
  setPage={setPage}
  setIsLoggedIn={setIsLoggedIn}
  setSidebarOpen={setSidebarOpen}

          />

        )
      }


      <div className="flex-1">


        <Navbar
          setPage={setPage}
          setSidebarOpen={setSidebarOpen}
          setSearch={setSearch}
        />

  
        <div className="p-6 space-y-6 max-w-6xl mx-auto">

      
          {
            page === "dashboard" && (
              <>

                <div className="bg-white p-6 rounded-2xl shadow-md">

                  <UserForm
                    addUser={addUser}
                    editingUser={editingUser}
                    updateUser={updateUser}
                  />

                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">

          
                  <UserList
                    users={users}
                    search={search}
                    deleteUser={deleteUser}
                    editUser={editUser}
                    viewUser={viewUser}
                  />

                </div>

              </>
            )
          }

    
          {
            page === "users" && (

              <div className="bg-white p-10 rounded-2xl shadow-md">

                <h1 className="text-3xl font-bold mb-8 text-gray-800">
                  Total Users
                </h1>

                <div className="bg-blue-600 text-white p-10 rounded-2xl w-72">

                  <p className="text-5xl font-bold">
                    {users.length}
                  </p>

                </div>

              </div>

            )
          }

    
          {
            page === "admin" && (
              <AdminPanel users={users} />
            )
          }

        </div>

      </div>

      
      <ViewModal
        user={selectedUser}
        closeModal={() =>
          setSelectedUser(null)
        }
      />

    </div>

  );

}