  import { useState, useEffect } from "react";
  import {
    User, 
    Mail,
    Phone,
    UserCog,
    Calendar,
    Activity,
    UserPlus,
    RotateCcw,
  } from "lucide-react";
  import Swal from "sweetalert2";

  export default function UserForm({
    addUser,
    editingUser,
    updateUser,
  }) {
    const [status, setStatus] = useState("");
    const [mobile, setMobile] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (editingUser) {
        setName(editingUser.name);
        setEmail(editingUser.email);
        setMobile(editingUser.mobile);
        setAge(editingUser.age);
        setRole(editingUser.role);
        setStatus(editingUser.age);
        setJoiningDate(editingUser.joiningDate);
      }
    }, [editingUser]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !name ||
    !email ||
    !mobile ||
    !age ||
    !role ||
    !status ||
    !joiningDate
  ) {
    Swal.fire({
      icon: "warning",
      title: "Empty Form",
      text: "Please fill all fields before adding user",
      confirmButtonColor: "#2563eb",
      confirmButtonText: "OK",
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    return;
  }

  if (age.toString().length > 3) {
    Swal.fire({
      icon: "error",
      title: "Invalid Age",
      text: "Age must be 1, 2 or 3 digits only",
      confirmButtonColor: "#2563eb",
      confirmButtonText: "OK",
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    return;
  }

if (/\d/.test(name)) {
  Swal.fire({
    icon: "error",
    title: "Invalid Name",
    text: "Name cannot contain numbers",
    confirmButtonColor: "#2563eb",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
  });

  return;
}


  const user = {
    id: editingUser ? editingUser.id : Date.now(),
    name,
    email,
    age,
    mobile,
    role,
    status,
    joiningDate,
  };

  console.log(user);

  if (editingUser) {
    await updateUser(user);
  } else {
    const success = await addUser(user);

    if (success) {
      setName("");
      setEmail("");
      setMobile("");
      setAge("");
      setRole("");
      setStatus("");
      setJoiningDate("");
    }
  }
};

const handleReset = (e) => {
  e.preventDefault();

  if (
    !name &&
    !email &&
    !mobile &&
    !age &&
    !role &&
    !status &&
    !joiningDate
  ) {
    Swal.fire({
      icon: "warning",
      title: "Form Already Empty",
      text: "Nothing to reset",
      confirmButtonColor: "#2563eb",
      confirmButtonText: "OK",
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    return;
  }

  Swal.fire({
    title: "Reset Form?",
    text: "All entered data will be cleared",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, Reset",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      setName("");
      setEmail("");
      setMobile("");
      setAge("");
      setRole("");
      setStatus("");
      setJoiningDate("");

      Swal.fire({
        icon: "success",
        title: "Reset Successfully",
        text: "Form has been cleared",
        confirmButtonColor: "#2563eb",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  });
};
    return (
      <div className="w-full">
  <div className="h-1.5 bg-blue-600 rounded-t-3xl"></div>

        <div className="bg-white px-6 py-5 rounded-b-3xl shadow-lg border border-gray-100">
          <div className="mb-6 flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
      <User className="text-white" size={22} />
    </div>

    <div>
      <h2 className="text-2xl font-bold text-gray-800">
        {editingUser ? "Edit User" : "User Form"}
      </h2>

      <p className="text-gray-500 text-sm">
        Add new user information
      </p>
    </div>
  </div>

          <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Mobile Number */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Mobile Number
    </label>

    <div className="relative">
      <Phone
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Enter mobile number"
        className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
    </div>
  </div>

              {/* Age */}
              <div >
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Age
                </label>

                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="number"
                    placeholder="Enter age"
                    className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>

  {/* Role */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Role
    </label>

    <div className="relative">
      <UserCog
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <select
        value={role}
      
        onChange={(e) => setRole(e.target.value)}
        className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
      >
    <option value="" hidden>
      Select Role
    </option> 

        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>  
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  </div>

  {/* Status */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Status
    </label>

    <div className="relative">
      <Activity
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" hidden>
          Select Status
        </option>

        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
        <option value="Blocked">Blocked</option>
      </select>
    </div>
  </div>
            </div>

  {/* Joining Date */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Joining Date
    </label>

    <div className="relative">
      <Calendar
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="date"
        className="w-full border border-gray-200 pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
        value={joiningDate}
        onChange={(e) => setJoiningDate(e.target.value)}
      />
    </div>
  </div>

            <div className="flex gap-4 mt-5">
              <button
    type="submit"
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 duration-300 text-white px-3 py-2 rounded-xl font-semibold shadow-lg"
  >
    <UserPlus size={18} />
    {editingUser ? "Update User" : "Add User"}
  </button>

              <button
    type="reset"
    onClick={handleReset}
    className="flex items-center gap-2 bg-red-100 hover:bg-red-300 hover:scale-105 active:scale-95 duration-300 text-red-600 px-3 py-2 rounded-xl font-semibold border border-red-300"
  >
    <RotateCcw size={18} />
    Reset
  </button>
            </div>

          </form>
        </div>
      </div>
    );  
  }