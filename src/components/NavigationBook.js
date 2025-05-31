"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User, X, BookOpen, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NavigationBar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   // Prevent body scroll when menu is open / dừng scrolled lại khi menu mobile mở
   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isMenuOpen]);

   // Detect scroll position to apply floating effect / này là navigation floating khi mà scrolled
   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 30);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Close mobile menu when screen size changes to desktop / khi ở desktop menumobile  tự đóng
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 1024 && isMenuOpen) {
            setIsMenuOpen(false);
         }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [isMenuOpen]);

   return (
      <>
         <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
               scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
         >
            <div className="container mx-auto px-4">
               <div className="flex h-14 items-center justify-between">
                  {/* Left section: Logo and mobile menu toggle */}
                  <div className="flex items-center space-x-4">
                     {/* Mobile Menu Toggle - Only visible on small and medium screens */}
                     <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-200/70 cursor-pointer">
                        <Menu className="h-5 w-5" />
                     </button>

                     {/* Logo */}
                     <Link href="/" className="flex items-center space-x-2">
                        <img src="/images/BookLogo.png" alt="BookDex Logo" className="h-6 w-6 object-contain" />
                        <span className="text-xl font-bold">BookDex</span>
                     </Link>
                  </div>

                  {/* Desktop Nav - Only visible on large screens */}
                  <nav className="hidden lg:flex items-center space-x-6 mx-4 flex-grow justify-center">
                     <Link href="/newbook" className="text-xs hover:text-blue-500 transition-colors px-2 py-1 font-semibold">
                        New Releases
                     </Link>
                     <Link href="/best" className="text-xs hover:text-blue-500 transition-colors px-2 py-1 font-semibold">
                        Bestsellers
                     </Link>
                     <div className="relative group">
                        <button className="text-xs hover:text-blue-500 transition-colors px-2 py-1 font-semibold flex items-center">
                           Genres
                           <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                        <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-40 hover:opacity-100 hover:visible">
                           <Link href="/genres/fiction" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                              Fiction
                           </Link>
                           <Link href="/genres/non-fiction" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                              Non-Fiction
                           </Link>
                           <Link href="/genres/mystery" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                              Mystery
                           </Link>
                           <Link href="/genres/sci-fi" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                              Sci-Fi & Fantasy
                           </Link>
                        </div>
                     </div>
                     <Link href="/authors" className="text-xs hover:text-blue-500 transition-colors px-2 py-1 font-semibold">
                        Authors
                     </Link>
                  </nav>

                  {/* Right section: Search and User Actions */}
                  <div className="flex items-center space-x-2">
                     {/* Search - Visible on medium screens and up */}
                     <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                           type="text"
                           placeholder="Search books..."
                           className={`pl-10 w-40 lg:w-64 ${scrolled ? "bg-gray-100 border-gray-300" : "bg-white/80 border-gray-200"}`}
                        />
                     </div>

                     {/* Mobile Search Toggle / nút tìm kiếm ấn kích hoạt ô input khi ở mobile */}
                     <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="sm:hidden p-2 rounded-full hover:bg-gray-200/70">
                        <Search className="h-5 w-5" />
                     </button>

                     <Link href="/cart" className="p-2 rounded-full hover:bg-gray-200/70 relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
                           3
                        </span>
                     </Link>

                     <Link href="/sign-in" className="p-2 rounded-full hover:bg-gray-200/70">
                        <User className="h-5 w-5" />
                     </Link>
                  </div>
               </div>

               {/* Mobile Search /tìm kiểm của mobile sẽ hiện được kích hoạt/ - Expandable */}
               {isSearchOpen && (
                  <div className="sm:hidden py-2 pb-4">
                     <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input type="text" placeholder="Search books..." className="pl-10 w-full bg-gray-100 border-gray-300" />
                     </div>
                  </div>
               )}
            </div>
         </header>

         {/* Mobile Menu Overlay / overlay nền cho menumobile khi xuất hiện */}
         <div
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
               isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
         >
            {/* Backdrop overlay */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-xs" onClick={() => setIsMenuOpen(false)}></div>

            {/* Menu content - Left side with slide animation / sidebar mobile menu */}
            <div
               className={`absolute top-0 left-0 h-full w-[80%] max-w-[300px] bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "translate-x-0" : "-translate-x-full"
               }`}
            >
               <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <Link href="/" className="flex items-center space-x-2">
                     <img src="/images/BookLogo.png" alt="BookDex Logo" className="h-8 w-8 object-contain" />
                     <span className="text-xl font-bold">BookDex</span>
                  </Link>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100 cursor-pointer hover:text-red-500">
                     <X className="h-5 w-5" />
                  </button>
               </div>

               <nav className="flex flex-col py-4">
                  <Link href="/new-releases" className="px-4 py-2 font hover:bg-gray-100">
                     New Releases
                  </Link>
                  <Link href="/bestsellers" className="px-4 py-2 hover:bg-gray-100">
                     Bestsellers
                  </Link>
                  <div className="px-4 py-2">
                     <div className="flex items-center justify-between hover:bg-gray-100 -mx-4 px-4 py-2">
                        <span>Genres</span>
                        <ChevronDown className="h-4 w-4" />
                     </div>
                     <div className="pl-4 mt-1 border-l border-gray-200">
                        <Link href="/genres/fiction" className="block py-2 text-sm hover:text-blue-500">
                           Fiction
                        </Link>
                        <Link href="/genres/non-fiction" className="block py-2 text-sm hover:text-blue-500">
                           Non-Fiction
                        </Link>
                        <Link href="/genres/mystery" className="block py-2 text-sm hover:text-blue-500">
                           Mystery
                        </Link>
                        <Link href="/genres/sci-fi" className="block py-2 text-sm hover:text-blue-500">
                           Sci-Fi & Fantasy
                        </Link>
                     </div>
                  </div>
                  <Link href="/authors" className="px-4 py-2 hover:bg-gray-100">
                     Authors
                  </Link>
               </nav>
            </div>
         </div>
      </>
   );
}
