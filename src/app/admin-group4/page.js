import AdminLayout from "./layout";
import { BarChart3, ArrowUp, ArrowDown, Users, ShoppingCart, CreditCard, Activity } from "lucide-react";

export default function AdminDashboard() {
   const stats = [
      {
         title: "Total Users",
         value: "12,345",
         change: "+12%",
         trend: "up",
         icon: Users,
         color: "from-blue-600 to-indigo-600",
      },
      {
         title: "Total Orders",
         value: "1,234",
         change: "+8%",
         trend: "up",
         icon: ShoppingCart,
         color: "from-emerald-600 to-teal-600",
      },
      {
         title: "Revenue",
         value: "$34,567",
         change: "+23%",
         trend: "up",
         icon: CreditCard,
         color: "from-amber-600 to-orange-600",
      },
      {
         title: "Conversion Rate",
         value: "3.2%",
         change: "-2%",
         trend: "down",
         icon: Activity,
         color: "from-rose-600 to-pink-600",
      },
   ];

   return (
      <div className="space-y-6">
         <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="flex space-x-2">
               <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  Export
               </button>
               <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg text-sm font-medium text-white shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5">
                  Add New
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
               <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
               >
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stat.value}</h3>
                     </div>
                     <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                        <stat.icon className="h-5 w-5" />
                     </div>
                  </div>
                  <div className="mt-4 flex items-center">
                     {stat.trend === "up" ? <ArrowUp className="h-4 w-4 text-emerald-500" /> : <ArrowDown className="h-4 w-4 text-rose-500" />}
                     <span className={`text-sm font-medium ml-1 ${stat.trend === "up" ? "text-emerald-500" : "text-rose-500"}`}>{stat.change}</span>
                     <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
                  </div>
               </div>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
               <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Sales Overview</h2>
                  <div className="flex space-x-2">
                     <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                        Weekly
                     </button>
                     <button className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md text-xs font-medium text-blue-700 dark:text-blue-400 transition-colors duration-200">
                        Monthly
                     </button>
                     <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                        Yearly
                     </button>
                  </div>
               </div>
               <div className="h-64 flex items-center justify-center">
                  <BarChart3 className="h-48 w-48 text-gray-300 dark:text-gray-600" />
                  <p className="text-gray-500 dark:text-gray-400 absolute">Chart will appear here</p>
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
               <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
               <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                     <div key={item} className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs">
                           {item}
                        </div>
                        <div className="ml-3">
                           <p className="text-sm font-medium text-gray-900 dark:text-white">New order placed</p>
                           <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Order #{1000 + item} was placed</p>
                           <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item * 10} minutes ago</p>
                        </div>
                     </div>
                  ))}
               </div>
               <button className="mt-6 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                  View All Activity
               </button>
            </div>
         </div>
      </div>
   );
}
