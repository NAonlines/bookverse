"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
   const router = useRouter();
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
   const [errors, setErrors] = useState({});
   const [message, setMessage] = useState(null);
   const [agreeTerms, setAgreeTerms] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors({});

      const newErrors = {};
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
      if (!agreeTerms) newErrors.terms = "You must agree to the terms and conditions";

      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
      }

      try {
         setMessage({ type: "success", text: "Registration successful! Redirecting to login..." });
         setTimeout(() => router.push("/sign-in"), 1500);
      } catch (error) {
         setMessage({ type: "error", text: error.message || "Registration failed. Please try again." });
      }
   };

   return (
      <div
         className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
         style={{
            backgroundImage: "url('/images/Book3.jpg')",
         }}
      >
         {/* Light overlay */}
         <div className="absolute inset-0 bg-black/30 z-0"></div>

         {/* Logo */}
         <Link href="/" className="absolute top-6 left-6 text-white focus:outline-none z-50 drop-shadow-2xl">
            <p className="sparkle-text text-2xl">
               <strong className="sparkle-text">BookDex</strong>
            </p>
         </Link>

         {/* Floating Form Container - Horizontal Layout */}
         <div className="relative z-10 w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-2xl p-6 border border-gray-100 transform hover:scale-[1.01] transition-all duration-300">
               <div className="space-y-4">
                  <div className="text-center">
                     <h2 className="text-xl font-bold text-gray-900">Create Account</h2>
                     <p className="mt-1 text-xs text-gray-500">Join our community of book lovers</p>
                  </div>

                  {/* Social SignUp */}
                  <div className="flex justify-center">
                     <button
                        onClick={() => (window.location.href = "/api/auth/google")}
                        className="flex items-center bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                     >
                        <div className="w-4 h-4 mr-2 bg-white p-1 rounded flex items-center justify-center">
                           <svg viewBox="0 0 24 24" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                 <path
                                    fill="#4285F4"
                                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                                 />
                                 <path
                                    fill="#34A853"
                                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                                 />
                                 <path
                                    fill="#FBBC05"
                                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                                 />
                                 <path
                                    fill="#EA4335"
                                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                                 />
                              </g>
                           </svg>
                        </div>
                        <span className="font-medium text-xs">Sign up with Google</span>
                     </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center justify-center space-x-2">
                     <span className="h-px w-12 bg-gray-300"></span>
                     <span className="text-gray-400 font-normal text-xs">or continue with</span>
                     <span className="h-px w-12 bg-gray-300"></span>
                  </div>

                  {/* Messages - Fixed position to not affect layout */}
                  {message && (
                     <div className="absolute top-4 right-4 z-50">
                        <div className="bg-white rounded-lg shadow-lg border p-3 max-w-xs">
                           <small
                              className={`text-xs font-medium ${
                                 message.type === "error"
                                    ? "text-red-500"
                                    : message.type === "success"
                                    ? "text-green-500"
                                    : message.type === "warning"
                                    ? "text-yellow-500"
                                    : "text-teal-500"
                              }`}
                              role="alert"
                           >
                              {message.text}
                           </small>
                        </div>
                     </div>
                  )}

                  {/* SignUp Form - 2 Column Layout */}
                  <form className="space-y-3" onSubmit={handleSubmit} noValidate>
                     {/* Row 1: Name and Email */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div className="relative">
                           <label className="block text-xs font-bold text-gray-700 mb-1">
                              Full Name<span className="text-red-500">*</span>
                           </label>
                           <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={` rounded-md w-full pl-3 pr-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-none outline-none transition-all duration-300 bg-transparent text-sm ${
                                 errors.name ? "border-b-red-500 focus:border-b-red-500" : ""
                              }`}
                              placeholder="John Doe"
                           />
                           {errors.name && (
                              <div className="absolute -bottom-4 left-0 text-red-500 text-xs font-medium bg-white px-1 rounded shadow-sm">
                                 {errors.name}
                              </div>
                           )}
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                           <label className="block text-xs font-bold text-gray-700 mb-1">
                              Email<span className="text-red-500">*</span>
                           </label>
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={` rounded-md w-full pl-3 pr-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-none outline-none transition-all duration-300 bg-transparent text-sm ${
                                 errors.email ? "border-b-red-500 focus:border-b-red-500" : ""
                              }`}
                              placeholder="mail@example.com"
                           />
                           {errors.email && (
                              <div className="absolute -bottom-4 left-0 text-red-500 text-xs font-medium bg-white px-1 rounded shadow-sm">
                                 {errors.email}
                              </div>
                           )}
                        </div>
                     </div>

                     {/* Row 2: Password and Confirm Password */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {/* Password Field */}
                        <div className="relative">
                           <label className="block text-xs font-bold text-gray-700 mb-1">
                              Password<span className="text-red-500">*</span>
                           </label>
                           <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              className={` rounded-md w-full pl-3 pr-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-none outline-none transition-all duration-300 bg-transparent text-sm ${
                                 errors.password ? "border-b-red-500 focus:border-b-red-500" : ""
                              }`}
                              placeholder="Enter your password"
                           />
                           {errors.password && (
                              <div className="absolute -bottom-4 left-0 text-red-500 text-xs font-medium bg-white px-1 rounded shadow-sm">
                                 {errors.password}
                              </div>
                           )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="relative">
                           <label className="block text-xs font-bold text-gray-700 mb-1">
                              Confirm Password<span className="text-red-500">*</span>
                           </label>
                           <input
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className={` rounded-md w-full pl-3 pr-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-none outline-none transition-all duration-300 bg-transparent text-sm ${
                                 errors.confirmPassword ? "border-b-red-500 focus:border-b-red-500" : ""
                              }`}
                              placeholder="Confirm your password"
                           />
                           {errors.confirmPassword && (
                              <div className="absolute -bottom-4 left-0 text-red-500 text-xs font-medium bg-white px-1 rounded shadow-sm">
                                 {errors.confirmPassword}
                              </div>
                           )}
                        </div>
                     </div>

                     {/* Terms and Conditions */}
                     <div className="flex items-start space-x-3 pt-6 pb-5">
                        <input
                           id="terms"
                           name="terms"
                           type="checkbox"
                           checked={agreeTerms}
                           onChange={(e) => setAgreeTerms(e.target.checked)}
                           className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded "
                        />
                        <label htmlFor="terms" className="text-xs text-gray-700">
                           I agree to the{" "}
                           <Link href="/terms" className="text-indigo-500 hover:text-blue-600 font-medium transition-colors">
                              Terms and Conditions
                           </Link>{" "}
                           and{" "}
                           <Link href="/privacy" className="text-indigo-500 hover:text-blue-600 font-medium transition-colors">
                              Privacy Policy
                           </Link>
                           <span className="text-red-500">*</span>
                        </label>
                        {errors.terms && (
                           <div className="absolute mt-4 text-red-500 text-xs font-medium bg-white px-1 py-2 rounded shadow-sm">{errors.terms}</div>
                        )}
                     </div>

                     {/* Submit Button */}
                     <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-500 hover:to-indigo-600 text-white py-2.5 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] mt-4 text-sm"
                     >
                        Create Account
                     </button>

                     {/* Sign In Link */}
                     <p className="text-center text-gray-600 text-xs">
                        Already have an account?{" "}
                        <Link href="/sign-in" className="text-indigo-500 hover:text-blue-600 font-medium transition-colors">
                           Sign in
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>

         {/* Animated circles */}
         <ul className="circles">
            {[...Array(10)].map((_, i) => (
               <li key={i}></li>
            ))}
         </ul>
      </div>
   );
}
