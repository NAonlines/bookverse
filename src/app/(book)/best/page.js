"use client";

import { useState } from "react";
import { ArrowLeft, Star, Bookmark, Eye, MessageCircle, Grid3X3, List, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function BestSellers() {
   const [viewMode, setViewMode] = useState("detailed"); // list, detailed, grid
   const [currentPage, setCurrentPage] = useState(1);

   // Mock data for bestselling books - 12 items per page
   const bestSellerBooks = [
      {
         id: 1,
         title: "The Seven Husbands of Evelyn Hugo",
         author: "Taylor Jenkins Reid",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.8,
         bookmarks: 1250,
         views: "15K",
         comments: 89,
         status: "Available",
         genres: ["ROMANCE", "HISTORICAL FICTION", "DRAMA", "CONTEMPORARY"],
         description:
            "Reclusive Hollywood icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.",
         price: "$16.99",
         originalPrice: "$21.99",
         isNew: true,
         salesRank: 1,
      },
      {
         id: 2,
         title: "Where the Crawdads Sing",
         author: "Delia Owens",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.6,
         bookmarks: 980,
         views: "12K",
         comments: 156,
         status: "Available",
         genres: ["MYSTERY", "LITERARY FICTION", "NATURE", "COMING OF AGE"],
         description:
            "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
         price: "$15.49",
         originalPrice: "$19.99",
         isNew: false,
         salesRank: 2,
      },
      {
         id: 3,
         title: "The Midnight Library",
         author: "Matt Haig",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.5,
         bookmarks: 756,
         views: "9.8K",
         comments: 203,
         status: "Available",
         genres: ["PHILOSOPHY", "FANTASY", "CONTEMPORARY", "SELF-HELP"],
         description:
            "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices...",
         price: "$14.99",
         originalPrice: "$18.99",
         isNew: true,
         salesRank: 3,
      },
      {
         id: 4,
         title: "Atomic Habits",
         author: "James Clear",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.9,
         bookmarks: 2100,
         views: "25K",
         comments: 445,
         status: "Available",
         genres: ["SELF-HELP", "PRODUCTIVITY", "PSYCHOLOGY", "BUSINESS"],
         description:
            "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
         price: "$18.99",
         originalPrice: "$24.99",
         isNew: false,
         salesRank: 4,
      },
      {
         id: 5,
         title: "The Silent Patient",
         author: "Alex Michaelides",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.7,
         bookmarks: 890,
         views: "11K",
         comments: 167,
         status: "Available",
         genres: ["THRILLER", "MYSTERY", "PSYCHOLOGICAL", "SUSPENSE"],
         description:
            "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
         price: "$19.99",
         originalPrice: "$25.99",
         isNew: true,
         salesRank: 5,
      },
      {
         id: 6,
         title: "Project Hail Mary",
         author: "Andy Weir",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.8,
         bookmarks: 1340,
         views: "18K",
         comments: 298,
         status: "Available",
         genres: ["SCI-FI", "ADVENTURE", "SPACE", "HUMOR"],
         description:
            "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
         price: "$20.99",
         originalPrice: "$26.99",
         isNew: false,
         salesRank: 6,
      },
      {
         id: 7,
         title: "The Thursday Murder Club",
         author: "Richard Osman",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.4,
         bookmarks: 675,
         views: "8.5K",
         comments: 124,
         status: "Available",
         genres: ["MYSTERY", "COMEDY", "CRIME", "COZY MYSTERY"],
         description:
            "In a peaceful retirement village, four unlikely friends meet weekly in the Jigsaw Room to discuss unsolved crimes; together they call themselves the Thursday Murder Club. When a local developer is found dead with a mysterious photograph left next to the body, the Thursday Murder Club suddenly find themselves in the middle of their first live case.",
         price: "$13.99",
         originalPrice: "$17.99",
         isNew: true,
         salesRank: 7,
      },
      {
         id: 8,
         title: "Educated",
         author: "Tara Westover",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.6,
         bookmarks: 1120,
         views: "14K",
         comments: 267,
         status: "Available",
         genres: ["MEMOIR", "BIOGRAPHY", "NON-FICTION", "EDUCATION"],
         description:
            "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent.",
         price: "$17.49",
         originalPrice: "$22.99",
         isNew: false,
         salesRank: 8,
      },
      {
         id: 9,
         title: "I'm Glad My Mom Died",
         author: "Jennette McCurdy",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.7,
         bookmarks: 1400,
         views: "19K",
         comments: 310,
         status: "Available",
         genres: ["MEMOIR", "BIOGRAPHY", "NON-FICTION", "ENTERTAINMENT"],
         description:
            "A heartbreaking and hilarious memoir by iCarly star Jennette McCurdy about her struggles as a former child actor—including eating disorders, addiction, and a complicated relationship with her overbearing mother—and how she retook control of her life.",
         price: "$18.49",
         originalPrice: "$23.99",
         isNew: true,
         salesRank: 9,
      },
      {
         id: 10,
         title: "It Ends With Us",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.5,
         bookmarks: 1100,
         views: "15K",
         comments: 280,
         status: "Available",
         genres: ["ROMANCE", "DRAMA", "CONTEMPORARY"],
         description:
            "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And then she meets Ryle Kincaid and everything in Lily’s life seems too good to be true.",
         price: "$16.49",
         originalPrice: "$21.99",
         isNew: false,
         salesRank: 10,
      },
      {
         id: 11,
         title: "Verity",
         author: "Colleen Hoover",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.6,
         bookmarks: 1300,
         views: "17K",
         comments: 300,
         status: "Available",
         genres: ["THRILLER", "ROMANCE", "SUSPENSE"],
         description:
            "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.",
         price: "$17.99",
         originalPrice: "$22.99",
         isNew: true,
         salesRank: 11,
      },
      {
         id: 12,
         title: "The Psychology of Money",
         author: "Morgan Housel",
         cover: "/placeholder.svg?height=200&width=140",
         rating: 4.8,
         bookmarks: 1500,
         views: "20K",
         comments: 350,
         status: "Available",
         genres: ["SELF-HELP", "FINANCE", "PSYCHOLOGY", "BUSINESS"],
         description:
            "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world, people don’t make financial decisions on a spreadsheet.",
         price: "$19.49",
         originalPrice: "$24.99",
         isNew: false,
         salesRank: 12,
      },
   ];

   const totalPages = 313;
   const itemsPerPage = 12;

   const getStatusColor = (status) => {
      switch (status) {
         case "Available":
            return "bg-green-100 text-green-800";
         case "Out of Stock":
            return "bg-red-100 text-red-800";
         case "Pre-order":
            return "bg-blue-100 text-blue-800";
         default:
            return "bg-gray-100 text-gray-800";
      }
   };

   const getGenreColor = (genre) => {
      const colors = {
         ROMANCE: "bg-pink-100 text-pink-800",
         THRILLER: "bg-red-100 text-red-800",
         "SCI-FI": "bg-blue-100 text-blue-800",
         FANTASY: "bg-purple-100 text-purple-800",
         MYSTERY: "bg-gray-100 text-gray-800",
         "SELF-HELP": "bg-green-100 text-green-800",
         "HISTORICAL FICTION": "bg-amber-100 text-amber-800",
         CONTEMPORARY: "bg-teal-100 text-teal-800",
         DRAMA: "bg-orange-100 text-orange-800",
         "LITERARY FICTION": "bg-indigo-100 text-indigo-800",
         PHILOSOPHY: "bg-violet-100 text-violet-800",
         PSYCHOLOGY: "bg-cyan-100 text-cyan-800",
         PRODUCTIVITY: "bg-lime-100 text-lime-800",
         BUSINESS: "bg-emerald-100 text-emerald-800",
         PSYCHOLOGICAL: "bg-rose-100 text-rose-800",
         SUSPENSE: "bg-slate-100 text-slate-800",
         ADVENTURE: "bg-yellow-100 text-yellow-800",
         SPACE: "bg-sky-100 text-sky-800",
         HUMOR: "bg-orange-100 text-orange-800",
         NATURE: "bg-green-100 text-green-800",
         "COMING OF AGE": "bg-pink-100 text-pink-800",
         COMEDY: "bg-yellow-100 text-yellow-800",
         CRIME: "bg-red-100 text-red-800",
         "COZY MYSTERY": "bg-purple-100 text-purple-800",
         MEMOIR: "bg-blue-100 text-blue-800",
         BIOGRAPHY: "bg-indigo-100 text-indigo-800",
         "NON-FICTION": "bg-gray-100 text-gray-800",
         EDUCATION: "bg-green-100 text-green-800",
      };
      return colors[genre] || "bg-gray-100 text-gray-800";
   };

   // phiên bản dễ hơn
   return (
      <div className="min-h-screen bg-gray-50 pt-20">
         {/* Page Header - Below Navigation */}
         <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
               <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                     <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft className="h-5 w-5" />
                     </Link>
                     <h1 className="text-2xl font-bold text-gray-900">Best Sellers</h1>
                  </div>

                  {/* View Mode Controls */}
                  <div className="flex items-center space-x-1">
                     <Button
                        variant={viewMode === "list" ? "ghost" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode("list")}
                        className={`h-9 w-9 ${viewMode === "list" ? "bg-gray-100" : ""}`}
                     >
                        <List className="h-4 w-4" />
                     </Button>
                     <Button
                        variant={viewMode === "detailed" ? "default" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode("detailed")}
                        className={`h-9 w-9 ${viewMode === "detailed" ? "bg-black text-white hover:bg-black" : ""}`}
                     >
                        <MoreHorizontal className="h-4 w-4 rotate-90" />
                     </Button>
                     <Button
                        variant={viewMode === "grid" ? "ghost" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode("grid")}
                        className={`h-9 w-9 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                     >
                        <Grid3X3 className="h-4 w-4" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>

         {/* Content */}
         <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {bestSellerBooks.slice(0, 12).map((book) => (
                  <div key={book.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                     <div className="flex space-x-4">
                        {/* Book Cover */}
                        <div className="flex-shrink-0">
                           <div className="relative">
                              <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-24 h-32 object-cover rounded-md shadow-sm" />
                              {book.salesRank <= 3 && (
                                 <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                    {book.salesRank}
                                 </div>
                              )}
                           </div>
                        </div>

                        {/* Book Info */}
                        <div className="flex-1 min-w-0">
                           <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                 {book.isNew && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                                 <Link href={`/book/${book.id}`} className="font-semibold text-gray-900 hover:text-blue-600 line-clamp-1">
                                    {book.title}
                                 </Link>
                              </div>
                              <Badge className={getStatusColor(book.status)} variant="secondary">
                                 {book.status}
                              </Badge>
                           </div>

                           {/* Stats */}
                           <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                              <div className="flex items-center space-x-1">
                                 <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                 <span>{book.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                 <Bookmark className="h-3 w-3" />
                                 <span>{book.bookmarks}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                 <Eye className="h-3 w-3" />
                                 <span>{book.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                 <MessageCircle className="h-3 w-3" />
                                 <span>{book.comments}</span>
                              </div>
                           </div>

                           {/* Genres */}
                           <div className="flex flex-wrap gap-1 mb-3">
                              {book.genres.slice(0, 4).map((genre) => (
                                 <Badge key={genre} variant="secondary" className={`text-xs ${getGenreColor(genre)}`}>
                                    {genre}
                                 </Badge>
                              ))}
                           </div>

                           {/* Description */}
                           <p className="text-sm text-gray-600 line-clamp-3 mb-3">{book.description}</p>

                           {/* Author and Price */}
                           <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-500">by {book.author}</p>
                              <div className="flex items-center space-x-2">
                                 <span className="font-semibold text-green-600">{book.price}</span>
                                 <span className="text-sm text-gray-400 line-through">{book.originalPrice}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-8">
               <Button variant="outline" size="icon" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
                  <ChevronLeft className="h-4 w-4" />
               </Button>

               <Button variant={currentPage === 1 ? "default" : "outline"} onClick={() => setCurrentPage(1)} className="min-w-[40px]">
                  1
               </Button>

               <Button variant={currentPage === 2 ? "default" : "outline"} onClick={() => setCurrentPage(2)} className="min-w-[40px]">
                  2
               </Button>

               <Button variant={currentPage === 3 ? "default" : "outline"} onClick={() => setCurrentPage(3)} className="min-w-[40px]">
                  3
               </Button>

               <span className="px-2 text-gray-500">...</span>

               <Button variant="outline" onClick={() => setCurrentPage(totalPages)} className="min-w-[40px]">
                  {totalPages}
               </Button>

               <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
               >
                  <ChevronRight className="h-4 w-4" />
               </Button>
            </div>
         </div>
      </div>
   );
}
