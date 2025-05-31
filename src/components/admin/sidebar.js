"use client";
import Link from "next/link";
import { Home, Users, Music, Award, Grid, Monitor, AlertCircle, Square, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminSidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
   const [activeItem, setActiveItem] = useState("dashboard");

   function handleNavigation(item) {
      setActiveItem(item);
      setIsMobileMenuOpen(false);
   }

   // Add this useEffect to sync the active state with the current URL
   useEffect(() => {
      // Get the current path
      const path = window.location.pathname;

      // Set the active item based on the path
      if (path.includes("/admin-group4/users")) {
         setActiveItem("users");
      } else if (path.includes("/admin-group4/products")) {
         setActiveItem("products");
      } else if (path.includes("/admin-group4/orders")) {
         setActiveItem("orders");
      } else if (path.includes("/admin-group4/new")) {
         setActiveItem("new");
      } else if (path === "/admin-group4" || path === "/admin") {
         setActiveItem("dashboard");
      }
   }, []);

   function NavItem({ href, icon: Icon, children, id }) {
      const isActive = activeItem === id;

      return (
         <Link
            href={href}
            onClick={() => handleNavigation(id)}
            className={`flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200 ${
               isActive
                  ? "bg-blue-400 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
         >
            <Icon className={`h-4 w-4 mr-3 flex-shrink-0`} />
            <span className="flex-1">{children}</span>
         </Link>
      );
   }

   function SectionTitle({ children }) {
      return <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{children}</h3>;
   }

   return (
      <>
         <nav
            className={`
                                    fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out
                                    lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-gray-800
                                    ${isMobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"}
                                    `}
         >
            <div className="h-full flex flex-col">
               <div className="h-16 px-6 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Book Store</h1>
               </div>

               <div className="flex-1 overflow-y-auto py-4 px-4">
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <SectionTitle>HOME</SectionTitle>
                        <NavItem href="/admin-group4" icon={Home} id="dashboard">
                           Overview
                        </NavItem>
                     </div>

                     <div className="space-y-2">
                        <SectionTitle>UI COMPONENTS</SectionTitle>
                        <NavItem href="/admin-group4/users" icon={Users} id="users">
                           Users
                        </NavItem>
                        <NavItem href="/admin-group4/products" icon={Grid} id="products">
                           Products
                        </NavItem>
                        <NavItem href="/admin-group4/orders" icon={Award} id="orders">
                           Orders
                        </NavItem>
                        <NavItem href="/admin-group4/new" icon={Music} id="new">
                           new
                        </NavItem>
                     </div>

                     <div className="space-y-2">
                        <SectionTitle>UI COMPONENTS</SectionTitle>
                        <NavItem href="/icons" icon={Grid} id="icons">
                           Icons
                        </NavItem>
                        <NavItem href="/page-test" icon={Monitor} id="page-test">
                           Page Test
                        </NavItem>
                        <NavItem href="/alerts" icon={AlertCircle} id="alerts">
                           Alerts
                        </NavItem>
                        <NavItem href="/buttons" icon={Square} id="buttons">
                           Buttons
                        </NavItem>
                        <NavItem href="/cards" icon={CreditCard} id="cards">
                           Cards
                        </NavItem>
                     </div>
                  </div>
               </div>
            </div>
         </nav>

         {isMobileMenuOpen && (
            <div
               className="fixed inset-0 bg-black/75 bg-opacity-50 z-[65] lg:hidden backdrop-blur-sm transition-opacity duration-300"
               onClick={() => setIsMobileMenuOpen(false)}
            />
         )}
      </>
   );
}
