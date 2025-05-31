"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LastUpdates() {
   // Mock data for latest book updates
   const latestUpdates = [
      {
         id: 1,
         title: "The Seven Husbands of Evelyn Hugo",
         chapter: "Vol. 1 Ch. 15 - Ch. 15",
         author: "DemaniGady",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 2,
         title: "Project Hail Mary Adaptation",
         chapter: "Ch. 6",
         author: "Kitsune ID",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "10 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 3,
         title: "The Invisible Life of Addie LaRue Graphic Novel",
         chapter: "Ch. 21",
         author: "No Group",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "15 minutes ago",
         comments: 0,
         language: "🇬🇧",
         countryCode: "GB",
      },
      {
         id: 4,
         title: "Klara and the Sun: Visual Story",
         chapter: "Vol. 5 Ch. 38 - Stacid's Protection",
         author: "Yukkuri Discord Lazy Manga Tr...",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "31 minutes ago",
         comments: 0,
         language: "🇬🇧",
         countryCode: "GB",
      },
      {
         id: 5,
         title: "The Midnight Library",
         chapter: "Ch. 33",
         author: "Yellowstone TL",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "33 minutes ago",
         comments: 0,
         language: "🇬🇧",
         countryCode: "GB",
      },
      {
         id: 6,
         title: "Atomic Habits",
         chapter: "Ch. 4",
         author: "Mangatheoyeucau",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "35 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 7,
         title: "The Silent Patient",
         chapter: "Vol. 22 Ch. 189 - Chiến Tranh Hủ Tình",
         author: "T.I.Y Team",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "52 minutes ago",
         comments: 0,
         language: "🇻🇳",
         countryCode: "VN",
      },
      {
         id: 8,
         title: "Where the Crawdads Sing",
         chapter: "Vol. 3 Ch. 21",
         author: "No Group",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "56 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 9,
         title: "The Four Winds",
         chapter: "Ch. 11",
         author: "spinning_donuts",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour ago",
         comments: 5,
         language: "🇬🇧",
         countryCode: "GB",
      },
      {
         id: 10,
         title: "It Ends With Us",
         chapter: "Chapter 2",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour ago",
         comments: 2,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 11,
         title: "Verity",
         chapter: "Part 1",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 5 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 12,
         title: "Ugly Love",
         chapter: "Chapter 10",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 12 minutes ago",
         comments: 1,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 13,
         title: "November 9",
         chapter: "Chapter 5",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 20 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 14,
         title: "Reminders of Him",
         chapter: "Chapter 8",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 28 minutes ago",
         comments: 3,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 15,
         title: "Too Late",
         chapter: "Chapter 3",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 35 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 16,
         title: "All Your Perfects",
         chapter: "Chapter 7",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 42 minutes ago",
         comments: 1,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 17,
         title: "Layla",
         chapter: "Chapter 1",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 50 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 18,
         title: "Without Merit",
         chapter: "Chapter 9",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "1 hour, 57 minutes ago",
         comments: 2,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 19,
         title: "Confess",
         chapter: "Chapter 4",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 20,
         title: "Maybe Someday",
         chapter: "Chapter 6",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours, 7 minutes ago",
         comments: 1,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 21,
         title: "Finding Cinderella",
         chapter: "Chapter 2",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours, 14 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 22,
         title: "Hopeless",
         chapter: "Chapter 8",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours, 21 minutes ago",
         comments: 3,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 23,
         title: "Losing Hope",
         chapter: "Chapter 3",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours, 28 minutes ago",
         comments: 0,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 24,
         title: "Finding Perfect",
         chapter: "Chapter 7",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours, 35 minutes ago",
         comments: 1,
         language: "🇺🇸",
         countryCode: "US",
      },
      {
         id: 25,
         title: "Finding Perfect",
         chapter: "Chapter 7",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=60&width=45",
         timeAgo: "2 hours, 35 minutes ago",
         comments: 1,
         language: "🇺🇸",
         countryCode: "US",
      },
   ];

   return (
      <div className="rounded-lg bg-white shadow-md p-4 mb-8">
         <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Last Updates</h2>
            <Link href="/latest" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
               <ArrowRight className="h-5 w-5" />
            </Link>
         </div>

         {/* Updates Grid - 3 columns */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestUpdates.slice(0, 18).map((update) => (
               <Link
                  key={update.id}
                  href={`/book/${update.id}`}
                  className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50 transition-colors group"
               >
                  {/* Book Cover */}
                  <div className="flex-shrink-0">
                     <img src={update.cover || "/placeholder.svg"} alt={update.title} className="w-11 h-14 object-cover rounded shadow-sm" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                     {/* Title */}
                     <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                        {update.title}
                     </h3>

                     {/* Chapter with flag */}
                     <div className="flex items-center space-x-1 mb-2">
                        <img
                           src={`https://flagcdn.com/16x12/${update.countryCode.toLowerCase()}.png`}
                           alt={update.countryCode}
                           className="w-4 h-3 object-cover rounded-sm"
                           onError={(e) => {
                              e.target.style.display = "none";
                           }}
                        />
                        <span className="text-xs text-gray-900 font-medium">{update.chapter}</span>
                        {update.comments > 0 && (
                           <div className="flex items-center space-x-1 text-gray-400 ml-auto">
                              <MessageCircle className="h-3 w-3" />
                              <span className="text-xs">{update.comments}</span>
                           </div>
                        )}
                     </div>

                     {/* Author and Time */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 min-w-0">
                           <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                           <span className="text-xs text-gray-600 truncate">{update.author}</span>
                        </div>
                        <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{update.timeAgo}</span>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
