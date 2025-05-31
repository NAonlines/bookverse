"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/sidebar";
import AdminTopNav from "@/components/admin/top-nav";

export default function AdminLayout({ children }) {
   const [mounted, setMounted] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <div className="flex h-screen ">
         <AdminSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
         <div className="w-full flex flex-1 flex-col">
            <header className="h-16 border-b border-gray-200 dark:border-gray-800">
               <AdminTopNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </header>
            <main className="flex-1 overflow-auto p-6 bg-white dark:bg-gray-900">{children}</main>
         </div>
      </div>
   );
}
