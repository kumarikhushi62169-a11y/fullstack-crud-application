import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";


export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    
    // Empty Form Validation
    if (!email.trim() || !password.trim()) {
      await Swal.fire({
        icon: "warning",
        title: "Form Empty",
        text: "Please fill Email and Password",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome Admin",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      setIsLoggedIn(true);
    } catch (err) {
      console.log(err.response?.data);

      await Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid Email or Password",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
    }
  };

  



//  const handleLogin = async () => {
//   console.log("Login Button Clicked");

//   if (!email.trim() || !password.trim()) {
//     await Swal.fire({
//       icon: "warning",
//       title: "Form Empty",
//       text: "Please fill Email and Password",
//     });
//     return;
//   }

//   try {
//     console.log("Sending Request...");

//     const res = await axios.post(
//       "http://localhost:3000/auth/login",
//       {
//         email,
//         password,
//       }
//     );

//     console.log("LOGIN RESPONSE =", res.data);

//     localStorage.setItem("token", res.data.token);

//     await Swal.fire({
//       icon: "success",
//       title: "Login Successful",
//       text: "Welcome Admin",
//     });

//     setIsLoggedIn(true);

//   } catch (err) {
//     console.log("LOGIN ERROR =", err);

//     await Swal.fire({
//       icon: "error",
//       title: "Login Failed",
//       text:
//         err.response?.data?.message ||
//         "Invalid Email or Password",
//     });
//   }
// };
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-500">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Admin Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please login to continue
        </p>

        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-600">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-600">
            Password
          </label>

          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:scale-105 active:scale-95 duration-300 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-md"
        >
          Login
        </button>

        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Admin Panel System
        </p>

      </div>
    </div>
  );
}