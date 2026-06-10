import {
  Bell,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Navbar({ setPage, setSidebarOpen, setSearch }) {

  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value); 
  };

  return (

    <div className="bg-white border-b rounded border-gray-200 px-8 py-3 flex justify-between items-center">

  
      <div className="flex items-center gap-6">

        
        <div
          onClick={() => setSidebarOpen(true)}
          className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
        >

          <Menu size={25} className="text-[#0B1F4D]" />

        </div>

      
        <div className="hidden md:flex items-center bg-white border border-gray-200 px-5 py-2 rounded-2xl w-full max-w-2xl shadow-sm">

          <Search size={22} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search here..."
            value={value}
            onChange={handleSearch}
            className="bg-transparent outline-none w-lg px-4 text-lg text-gray-700"
          />

        </div>

      </div>

      <div className="flex items-center gap-8">

        
        <div
          onClick={() => setPage("admin")}
          className="flex items-center gap-4 cursor-pointer"
        >

      
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            alt="profile"
            className="w-9 h-9 rounded-full border-2 border-pink-400 object-cover"
          />

          
          <div className="hidden md:block">

            <h3 className="font-semibold text-sm  text-[#0B1F4D]">
              Mrs. Sharma
            </h3>

            <p className=" text-xs text-gray-500">
              Administrator
            </p>

          </div>

          <ChevronDown
            size={15}
            className="text-gray-500"
          />

        </div>

      </div>

    </div>

  );

}