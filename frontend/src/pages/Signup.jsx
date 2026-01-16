import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function Signup() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[600px]">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700" style={{ width: '600px' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
            {/* <p className="text-gray-400">Join Greek Learners today</p> */}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center" style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}>
                <User className="w-4 h-4 mr-2 text-green-400" />
                First Name
              </label>
              <input
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition"
                style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace', width: 'fit-content' }}
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center" style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}>
                <User className="w-4 h-4 mr-2 text-green-400" />
                Last Name
              </label>
              <input
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition"
                style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace', width: 'fit-content' }}
                placeholder="Enter your last name"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center" style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}>
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                Mobile Number
              </label>
              <input
                name="mobilenumber"
                type="tel"
                value={form.mobilenumber}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition"
                style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace', width: 'fit-content' }}
                placeholder="Enter your mobile number"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center" style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}>
                <Mail className="w-4 h-4 mr-2 text-green-400" />
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition"
                style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace', width: 'fit-content' }}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center" style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}>
                <Lock className="w-4 h-4 mr-2 text-green-400" />
                Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition"
                style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace', width: 'fit-content' }}
                placeholder="••••••••"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-400 text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-green-300 transition transform hover:scale-105"
              style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-400" style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}>
              Already have an account?{' '}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
                href="#"
                className="font-semibold text-green-400 hover:text-green-300 transition-colors"
                style={{ fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace' }}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
