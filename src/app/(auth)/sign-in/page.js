"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
   const router = useRouter();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rememberMe, setRememberMe] = useState(false);
   const [errors, setErrors] = useState({});
   const [message, setMessage] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors({});
      const newErrors = {};
      if (!email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
      if (!password) newErrors.password = "Password is required";

      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
      }

      try {
         setMessage({ type: "success", text: "SignIn successful! Redirecting..." });
         setTimeout(() => router.push("/"), 1500);
      } catch (error) {
         setMessage({ type: "error", text: error.message || "SignIn failed. Please try again." });
      }
   };

   return (
      <div
         className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
         style={{
            backgroundImage: "url('/images/Book2.jpg')",
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

         {/* Floating Form Container - Compact Horizontal */}
         <div className="relative z-10 w-full max-w-lg">
            <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
               <div className="space-y-6">
                  <div className="text-center">
                     <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
                     <p className="mt-1 text-xs text-gray-500">Please sign in to your account</p>
                  </div>

                  {/* Social SignIn */}
                  <div className="flex justify-center">
                     <button
                        onClick={() => (window.location.href = "/api/auth/google")}
                        className="flex items-center bg-blue-500 text-white rounded-lg px-5 py-2.5 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                     >
                        <div className="w-5 h-5 mr-2 bg-white p-1 rounded flex items-center justify-center">
                           <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
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
                        <span className="font-medium text-sm">Sign in with Google</span>
                     </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center justify-center space-x-2">
                     <span className="h-px w-12 bg-gray-300"></span>
                     <span className="text-gray-400 font-normal text-xs">or continue with</span>
                     <span className="h-px w-12 bg-gray-300"></span>
                  </div>

                  {/* Messages - Fixed position */}
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

                  {/* SignIn Form */}
                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                     {/* Email Field */}
                     <div className="relative">
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                           Email<span className="text-red-500">*</span>
                        </label>
                        <input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className={`rounded-md w-full pl-3 pr-0 py-2.5 border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-none outline-none transition-all duration-300 bg-transparent text-sm ${
                              errors.email ? "border-b-red-500 focus:border-b-red-500" : ""
                           }`}
                           placeholder="   mail@example.com"
                        />
                        {errors.email && (
                           <div className="absolute -bottom-4 left-0 text-red-500 text-xs font-medium bg-white px-1 rounded shadow-sm">
                              {errors.email}
                           </div>
                        )}
                     </div>

                     {/* Password Field */}
                     <div className="relative pt-4">
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                           Password<span className="text-red-500">*</span>
                        </label>
                        <input
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className={`rounded-md w-full pl-3 pr-0 py-2.5 border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-0 focus:shadow-none outline-none transition-all duration-300 bg-transparent text-sm ${
                              errors.password ? "border-b-red-500 focus:border-b-red-500" : ""
                           }`}
                           placeholder="   Enter your password"
                        />
                        {errors.password && (
                           <div className="absolute -bottom-4 left-0 text-red-500 text-xs font-medium bg-white px-1 rounded shadow-sm">
                              {errors.password}
                           </div>
                        )}
                     </div>

                     {/* Remember Me and Forgot Password */}
                     <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center">
                           <input
                              id="remember_me"
                              name="remember_me"
                              type="checkbox"
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                              className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                           />
                           <label htmlFor="remember_me" className="ml-2 block text-xs text-gray-900">
                              Remember me
                           </label>
                        </div>
                        <Link href="/forgot-password" className="text-xs text-indigo-500 hover:text-blue-600 font-medium transition-colors">
                           Forgot password?
                        </Link>
                     </div>

                     {/* Submit Button */}
                     <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-500 hover:to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] text-sm"
                     >
                        Sign in
                     </button>

                     {/* Sign Up Link */}
                     <p className="text-center text-gray-600 text-xs">
                        Don't have an account?{" "}
                        <Link href="/sign-up" className="text-indigo-500 hover:text-blue-600 font-medium transition-colors">
                           Sign up
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
