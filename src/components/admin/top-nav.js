"use client";

import { Bell, Search, Menu, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export default function AdminTopNav({ isMobileMenuOpen, setIsMobileMenuOpen }) {
   // const { theme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false);
   const [showNotifications, setShowNotifications] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-gray-900 h-full relative">
         <div className="font-medium text-sm flex items-center truncate">
            <button
               type="button"
               className="lg:hidden mr-3 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
               <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 font-bold">
               Admin Dashboard
            </span>
         </div>
         {/* 
                  <div className="hidden md:flex items-center relative max-w-xs w-full mr-4 group">
                        <Search className="absolute left-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                        <input
                              type="text"
                              placeholder="Search..."
                              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 dark:bg-gray-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all duration-200 ease-in-out"
                        />
                  </div> */}

         <div className="flex items-center gap-3 sm:gap-4 ml-auto sm:ml-0">
            <button
               type="button"
               className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200 relative hover:scale-110 active:scale-95"
               onClick={() => setShowNotifications(!showNotifications)}
            >
               <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
               <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* <button
                              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                              className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                              {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-gray-600" />}
                        </button> */}

            <div className="relative group">
               <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-[2px] hover:scale-110 transition-all duration-200 cursor-pointer">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">A</span>
                  </div>
               </div>

               <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 border border-gray-200 dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                     Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                     Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                     Sign out
                  </a>
               </div>
            </div>
         </div>

         {showNotifications && (
            <div className="absolute right-16 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
               <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
               </div>
               <div className="max-h-72 overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                     <a key={item} href="#" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex items-start">
                           <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                              {item}
                           </div>
                           <div className="ml-3 w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">New notification {item}</p>
                              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">You have a new notification from the system.</p>
                              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                           </div>
                        </div>
                     </a>
                  ))}
               </div>
               <a
                  href="#"
                  className="block text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 py-2 border-t border-gray-200 dark:border-gray-700"
               >
                  View all notifications
               </a>
            </div>
         )}
      </nav>
   );
}
