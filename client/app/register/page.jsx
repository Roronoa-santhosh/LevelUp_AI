"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration Successful");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020B2D] overflow-hidden flex items-center justify-center p-6">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-600/20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-purple-600/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-300 mt-3 text-lg">
            Register to continue your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-200 mb-2">
              Full Name
            </label>

            <div className="flex items-center border border-white/20 bg-white/10 rounded-2xl px-4 py-4">
              <User className="text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none ml-3 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-2">
              Email
            </label>

            <div className="flex items-center border border-white/20 bg-white/10 rounded-2xl px-4 py-4">
              <Mail className="text-gray-400 w-5 h-5" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none ml-3 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-200 mb-2">
              Password
            </label>

            <div className="flex items-center border border-white/20 bg-white/10 rounded-2xl px-4 py-4">
              <Lock className="text-gray-400 w-5 h-5" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none ml-3 text-white placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff className="text-gray-400 w-5 h-5" />
                ) : (
                  <Eye className="text-gray-400 w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-200 mb-2">
              Confirm Password
            </label>

            <div className="flex items-center border border-white/20 bg-white/10 rounded-2xl px-4 py-4">
              <Lock className="text-gray-400 w-5 h-5" />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none ml-3 text-white placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="text-gray-400 w-5 h-5" />
                ) : (
                  <Eye className="text-gray-400 w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-4 rounded-2xl text-lg shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-300">
          Already have an account?

          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-300 ml-1 font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}