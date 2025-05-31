"use client";

import { useState } from "react";
import BookGrid from "../components/BookGrid";
import FeaturedBooks from "../components/FeaturedBooks";
import LatestUpdates from "../components/LatestUpdates";
import { BookOpen, Clock, Star, TrendingUp } from "lucide-react";
import PublicLayout from "./(book)/layout";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
   const [activeTab, setActiveTab] = useState("latest");
   const [searchQuery, setSearchQuery] = useState("");

   return (
      <PublicLayout>
         {/* Hero Banner - Full width with navigation on top */}
         <HeroBanner />
         <div className="min-h-screen bg-gray-50 text-gray-900">
            <main className="container mx-auto px-4 py-6">
               {/* Latest Updates Section */}
               <LatestUpdates />

               {/* Featured Books Slider */}
               <FeaturedBooks />

               {/* Main Content */}
               <div className="mt-8 rounded-lg bg-white shadow-md overflow-hidden">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 overflow-x-auto">
                     <button
                        onClick={() => setActiveTab("latest")}
                        className={`px-4 py-3 flex items-center space-x-2 whitespace-nowrap ${
                           activeTab === "latest" ? "border-b-2 border-blue-500" : ""
                        }`}
                     >
                        <Clock className="h-4 w-4" />
                        <span>Latest Releases</span>
                     </button>
                     <button
                        onClick={() => setActiveTab("popular")}
                        className={`px-4 py-3 flex items-center space-x-2 whitespace-nowrap ${
                           activeTab === "popular" ? "border-b-2 border-blue-500" : ""
                        }`}
                     >
                        <TrendingUp className="h-4 w-4" />
                        <span>Popular Books</span>
                     </button>
                     <button
                        onClick={() => setActiveTab("recommended")}
                        className={`px-4 py-3 flex items-center space-x-2 whitespace-nowrap ${
                           activeTab === "recommended" ? "border-b-2 border-blue-500" : ""
                        }`}
                     >
                        <Star className="h-4 w-4" />
                        <span>Recommended</span>
                     </button>
                     <button
                        onClick={() => setActiveTab("genres")}
                        className={`px-4 py-3 flex items-center space-x-2 whitespace-nowrap ${
                           activeTab === "genres" ? "border-b-2 border-blue-500" : ""
                        }`}
                     >
                        <BookOpen className="h-4 w-4" />
                        <span>Genres</span>
                     </button>
                  </div>

                  {/* Book Grid */}
                  <BookGrid activeTab={activeTab} searchQuery={searchQuery} />
               </div>
            </main>
         </div>
      </PublicLayout>
   );
}
