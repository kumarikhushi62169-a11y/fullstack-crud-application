import Swal from "sweetalert2";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  LogOut,
  X,
  Eye,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({
page,
  setPage,
  setIsLoggedIn,
  setSidebarOpen,
}) {

  
  const handleLogout = async () => {

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",

      showCancelButton: true,

      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",

      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",

      background:"#0f172a",
      color: "#fff",

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });

    if (result.isConfirmed) {

      localStorage.removeItem("token");

      setIsLoggedIn(false);

      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

    }

  };

  return (

    <div className="w-72 bg-[#0B1F4D] text-white min-h-screen shadow-2xl flex flex-col justify-between relative overflow-hidden">

      
      <div>

        
        <div className="flex items-center justify-between  p-5 border-b border-white/10">

    
          <div>

            <h1 className="text-xl   font-extrabold tracking-wide">
              CRUD Admin
            </h1>

            <p className="text-xs text-gray-300 mt-1">
              User Management System
            </p>

          </div>

    
          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-white/10 hover:bg-red-500 p-2 rounded-lg transition duration-300"
          >
            <X size={17} />
          </button>

        </div>

        
        <div className="px-5 mt-6">

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg">

<img
  src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
  alt="profile"
  className="w-11 h-11 rounded-full border-2 border-pink-400 object-cover"
/>

            <div>

              <h2 className="text-base ">
                Mrs. Sharma
              </h2>

              <p className="text-xs text-gray-300">
                Administrator
              </p>

            </div>

          </div>

        </div>

    
        <div className="px-5 mt-8 mb-3">

          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
            Menu
          </p>

        </div>

  
        <ul className="space-y-2 px-4">

    
          <li
            onClick={() => setPage("dashboard")}
            className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition duration-300 shadow-lg ${
  page === "dashboard"
    ? "bg-blue-500 text-white"
    : "bg-white/10 hover:bg-blue-300"
}`}
          >

            <div className="flex items-center gap-3">

              <LayoutDashboard size={17} />

              <span  className="text-xs font-bold">
                Dashboard
              </span>

            </div>

            <ChevronRight
              size={14}
              className="opacity-70 group-hover:translate-x-1 transition"
            />

          </li>

        
          <li
            onClick={() => setPage("users")}
className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition duration-300 ${
  page === "users"
    ? "bg-blue-500 text-white"
    : "bg-white/10  hover:bg-blue-300"
}`}
          >

            <div className="flex  items-center gap-3">

              <Users size={17} />

              <span className="text-xs font-bold ">
                Users
              </span>

            </div>

            <ChevronRight
              size={14}
              className="opacity-70 group-hover:translate-x-1 transition"
            />

          </li>

          
          <li
            onClick={() => setPage("admin")}
className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition duration-300 ${
  page === "admin"
    ? "bg-blue-500 text-white"
    : "bg-white/10  hover:bg-blue-300"
}`}
          >

            <div className="flex items-center gap-3">

              <ShieldCheck size={17} />

              <span className="text-xs font-bold">
                Admin Panel
              </span>

            </div>

            <ChevronRight
              size={14}
              className="opacity-70 group-hover:translate-x-1 transition"
            />

          </li>


          <li
  onClick={() => setPage("viewusers")}
  className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition duration-300 ${
    page === "viewusers"
      ? "bg-blue-500 text-white"
      : "bg-white/10 hover:bg-blue-300"
  }`}
>
  <div className="flex items-center gap-3">
    <Eye size={16} />
    <span className="text-xs font-bold">
      View Users
    </span>
  </div>

  <ChevronRight
    size={14}
    className="opacity-70 group-hover:translate-x-1 transition"
  />
</li>

  
          <div className="border-t border-white/20 my-4"></div>

      
          <li
            onClick={handleLogout}
            className="group flex items-center justify-between px-4 py-3 bg-red-400 hover:bg-red-600 rounded-xl cursor-pointer transition duration-300 shadow-lg"
          >

            <div className="flex items-center gap-3">

              <LogOut size={17} />

              <span className="text-xs font-bold">
                Logout
              </span>

            </div>

            <ChevronRight
              size={14}
              className="opacity-70 group-hover:translate-x-1 transition"
            />

          </li>

        </ul>

      </div>

    
      <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute top-10 -right-16 w-36 h-36 bg-cyan-400/10 blur-3xl rounded-full"></div>

    </div>

  );

}