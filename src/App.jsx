import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ViewUsers from "./components/ViewsUsers";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Users from "./components/Users";
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

  setTimeout(() => {
  document
    .getElementById(`user-${res.data.id}`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
}, 100);
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
  
  const viewUser = (user) =>
    setSelectedUser(user);

  const editUser = (user) => {
  setEditingUser(user);

  setTimeout(() => {
    document
      .getElementById("user-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
};


const updateUser = async (updatedUser) => {
  try {
    const res = await fetch(
      `http://localhost:3000/users/${updatedUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );

    if (!res.ok) {
      throw new Error("Update failed");
    }

    const data = await res.json();

    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id ? data : user
      )
    );

   await Swal.fire({
  icon: "success",
  title: "User Updated Successfully",
  confirmButtonColor: "#2563eb",
  allowOutsideClick: false,
  allowEscapeKey: false,
});

setEditingUser(null);

setTimeout(() => {
  document
    .getElementById(`user-${updatedUser.id}`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
}, 200);

return true;
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: error.message,
      confirmButtonColor: "#2563eb",
    });

    return false;
  }
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

                <div 
                 id="user-form"
                
                className="bg-white p-6 rounded-2xl shadow-md">

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
                    
                  />

                </div>

              </>
            )
          }

    
          
          
{
  page === "users" && (
    <Users users={users} />
  )
}


          

    
          {
            page === "admin" && (
              <AdminPanel users={users} />
            )
          }


          {
  page === "viewusers" && (
    <ViewUsers users={users} />
  )
}

        </div>

      </div>      

    </div>

  );

}