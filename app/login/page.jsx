"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const router = useRouter();

const handleLogin = async () => {
  try {
    setLoading(true);
    setMessage("");

    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("token", data.token);

      setMessage("Login successful");
        router.push("/");
     
    } else {
      setMessage(data.message || "Login failed");
    }
  } catch (error) {
    console.log(error);

    setMessage("Server error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
      
      {/* Background Blur */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500/30 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500/30 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
        
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back 
          </h1>

          <p className="text-slate-300 mt-2">
            Login to continue your journey
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-slate-300 text-sm mb-2 block">
              Email
            </label>

            <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4">
              <Mail className="text-slate-400 w-5 h-5" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent p-4 outline-none text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-300 text-sm mb-2 block">
              Password
            </label>

            <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4">
              <Lock className="text-slate-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent p-4 outline-none text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Login Button */}
        <button
  onClick={handleLogin}
  className="w-full bg-[#2563eb] hover:bg-blue-700 transition text-white rounded-xl p-4 font-medium"
>
  {loading ? "Loading..." : "Sign In"}
</button>
{message && (
  <p className="text-center mt-4 text-sm text-slate-600">
    {message}
  </p>
)}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Don’t have an account?
          <Link href="/register" className="text-white ml-1 cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}