"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Star, Heart, Share2, ShoppingCart, BookOpen, Clock, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicLayout from "@/app/(book)/layout";

export default function BookDetailsPage() {
   const params = useParams();
   const [isInWishlist, setIsInWishlist] = useState(false);
   const [selectedFormat, setSelectedFormat] = useState("hardcover");

   // Mock book data - in real app, fetch based on params.id
   const book = {
      id: params.id,
      title: "The Silent Patient",
      subtitle: "A Psychological Thriller That Will Keep You Guessing Until the Final Page",
      author: "Alex Michaelides",
      cover: "/images/Book1.jpg",
      rating: 4.6,
      totalRatings: "24k",
      reviews: 1250,
      views: "125k",
      description: `Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas.

One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.

Alicia's refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London.

Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to treat her is partly professional curiosity and partly something more personal. He's convinced that if he can get Alicia to speak, he can help her heal and perhaps understand what happened that night.`,
      genres: ["Thriller", "Mystery", "Psychological", "Fiction", "Crime"],
      themes: ["Psychological Thriller", "Mental Health", "Marriage", "Art", "Silence"],
      publicationYear: 2019,
      publisher: "Celadon Books",
      pages: 336,
      language: "English",
      isbn: "978-1250301697",
      formats: {
         hardcover: { price: 24.99, originalPrice: 29.99, available: true },
         paperback: { price: 16.99, originalPrice: 19.99, available: true },
         ebook: { price: 12.99, originalPrice: 14.99, available: true },
         audiobook: { price: 19.99, originalPrice: 24.99, available: true },
      },
      chapters: [
         { id: 1, title: "Chapter 1", pages: "1-15", preview: true },
         { id: 2, title: "Chapter 2", pages: "16-28", preview: true },
         { id: 3, title: "Chapter 3", pages: "29-45", preview: false },
         { id: 4, title: "Chapter 4", pages: "46-62", preview: false },
         { id: 5, title: "Chapter 5", pages: "63-78", preview: false },
      ],
      relatedBooks: [
         { id: 2, title: "The Maidens", author: "Alex Michaelides", cover: "/placeholder.svg?height=200&width=150" },
         { id: 3, title: "Gone Girl", author: "Gillian Flynn", cover: "/placeholder.svg?height=200&width=150" },
         {
            id: 4,
            title: "The Girl with the Dragon Tattoo",
            author: "Stieg Larsson",
            cover: "/placeholder.svg?height=200&width=150",
         },
      ],
   };

   const currentFormat = book.formats[selectedFormat];

   return (
      <div className="min-h-screen bg-gray-50">
         {/* Hero Section - extends behind navigation */}
         <div className="relative bg-white overflow-hidden -mt-16 pt-48">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${book.cover})` }}></div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>

            <div className="relative z-10 container mx-auto px-4 py-8">
               <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Book Cover - keep sharp and prominent */}
                  <div className="lg:w-1/5 flex-shrink-0">
                     <div className="relative group z-30 pb-8">
                        <img
                           src={book.cover || "/placeholder.svg"}
                           alt={book.title}
                           className="w-full max-w-[250px] mx-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 object-cover"
                           style={{
                              aspectRatio: "3/4",
                              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
                              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                           }}
                        />
                     </div>
                  </div>

                  {/* Book Info */}
                  <div className="lg:w-4/5 space-y-6">
                     <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{book.title}</h1>
                        <p className="text-lg text-gray-600 mb-4">{book.subtitle}</p>
                        <p className="text-xl text-gray-800 font-medium">{book.author}</p>
                     </div>

                     {/* Action Buttons */}
                     <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 cursor-pointer">
                           <ShoppingCart className="h-5 w-5 mr-2" />
                           Add to Cart
                        </Button>
                        <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer">
                           <BookOpen className="h-5 w-5 mr-2" />
                           Start Reading
                        </Button>
                        <Button
                           variant="ghost"
                           size="lg"
                           onClick={() => setIsInWishlist(!isInWishlist)}
                           className={`text-gray-600 hover:bg-gray-100 ${isInWishlist ? "text-red-500" : ""}`}
                        >
                           <Heart className={`h-5 w-5 mr-2 ${isInWishlist ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="lg" className="text-gray-600 hover:bg-gray-100">
                           <Share2 className="h-5 w-5 mr-2" />
                        </Button>
                     </div>

                     {/* Genres */}
                     <div className="flex flex-wrap gap-2">
                        {book.genres.map((genre) => (
                           <Badge key={genre} variant="secondary" className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                              {genre.toUpperCase()}
                           </Badge>
                        ))}
                        <Badge className="bg-green-600 text-white">● PUBLICATION: {book.publicationYear}, AVAILABLE</Badge>
                     </div>

                     {/* Stats */}
                     <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                           <Star className="h-4 w-4 text-orange-400 fill-current" />
                           <span className="text-orange-500 font-medium">{book.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <BookOpen className="h-4 w-4" />
                           <span>{book.totalRatings}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <MessageCircle className="h-4 w-4" />
                           <span>{book.reviews}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                           <Eye className="h-4 w-4" />
                           <span>N/A</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Content */}
         <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
               {/* Left Sidebar - Remove Format Selection */}
               <div className="lg:col-span-1 space-y-6">
                  {/* Book Details */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                     <h3 className="font-semibold mb-4">Book Details</h3>
                     <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                           <span className="text-gray-600">Author:</span>
                           <span className="font-medium">{book.author}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-gray-600">Publisher:</span>
                           <span>{book.publisher}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-gray-600">Pages:</span>
                           <span>{book.pages}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-gray-600">Language:</span>
                           <span>{book.language}</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-gray-600">ISBN:</span>
                           <span>{book.isbn}</span>
                        </div>
                     </div>
                  </div>

                  {/* Genres */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                     <h3 className="font-semibold mb-4">Genres</h3>
                     <div className="flex flex-wrap gap-2">
                        {book.genres.map((genre) => (
                           <Badge key={genre} variant="outline">
                              {genre}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  {/* Themes */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                     <h3 className="font-semibold mb-4">Themes</h3>
                     <div className="flex flex-wrap gap-2">
                        {book.themes.map((theme) => (
                           <Badge key={theme} variant="outline">
                              {theme}
                           </Badge>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Main Content - rest remains the same */}
               <div className="lg:col-span-3">
                  <div className="bg-white rounded-lg shadow-sm">
                     <Tabs defaultValue="description" className="w-full ">
                        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 ">
                           <TabsTrigger value="description" className="cursor-pointer">
                              Description
                           </TabsTrigger>
                           <TabsTrigger value="chapters" className="cursor-pointer">
                              Preview Chapters
                           </TabsTrigger>
                           <TabsTrigger value="reviews" className="cursor-pointer">
                              Reviews ({book.reviews})
                           </TabsTrigger>
                           <TabsTrigger value="related" className="hidden lg:block cursor-pointer">
                              Related Books
                           </TabsTrigger>
                        </TabsList>

                        <TabsContent value="description" className="p-6">
                           <div className="prose max-w-none">
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{book.description}</p>
                           </div>
                        </TabsContent>

                        <TabsContent value="chapters" className="p-6">
                           <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                 <h3 className="text-lg font-semibold">Preview Chapters</h3>
                                 <Badge variant="outline" className="rounded-md">
                                    Free Preview Available
                                 </Badge>
                              </div>

                              <div className="space-y-3">
                                 {book.chapters.map((chapter) => (
                                    <div
                                       key={chapter.id}
                                       className={`flex items-center justify-between p-4 border rounded-lg ${
                                          chapter.preview
                                             ? "border-green-200 bg-green-50 hover:bg-green-100 cursor-pointer"
                                             : "border-gray-200 bg-gray-50"
                                       }`}
                                    >
                                       <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-sm font-medium">
                                             {chapter.id}
                                          </div>
                                          <div>
                                             <h4 className="font-medium">{chapter.title}</h4>
                                             <p className="text-sm text-gray-600">Pages {chapter.pages}</p>
                                          </div>
                                       </div>
                                       <div className="flex items-center gap-2">
                                          {chapter.preview ? (
                                             <Badge className="bg-green-600 text-white rounded-md">Free Preview</Badge>
                                          ) : (
                                             <Badge variant="outline" className="rounded-md">
                                                Purchase Required
                                             </Badge>
                                          )}
                                          <Clock className="h-4 w-4 text-gray-400" />
                                       </div>
                                    </div>
                                 ))}
                              </div>

                              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                 <p className="text-sm text-blue-800">
                                    <strong>Note:</strong> Preview chapters are available for free. Purchase the book to access all chapters and
                                    support the author.
                                 </p>
                              </div>
                           </div>
                        </TabsContent>

                        <TabsContent value="reviews" className="p-6">
                           <div className="space-y-6">
                              <div className="flex items-center gap-4">
                                 <div className="text-center">
                                    <div className="text-3xl font-bold">{book.rating}</div>
                                    <div className="flex items-center gap-1">
                                       {[...Array(5)].map((_, i) => (
                                          <Star
                                             key={i}
                                             className={`h-4 w-4 ${i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                          />
                                       ))}
                                    </div>
                                    <div className="text-sm text-gray-600">{book.totalRatings} ratings</div>
                                 </div>
                                 <div className="flex-1">
                                    <Button className="w-full">Write a Review</Button>
                                 </div>
                              </div>

                              {/* Sample reviews */}
                              <div className="space-y-4">
                                 {[1, 2, 3].map((review) => (
                                    <div key={review} className="border-b pb-4">
                                       <div className="flex items-center gap-2 mb-2">
                                          <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-sm font-medium">
                                             U{review}
                                          </div>
                                          <div>
                                             <p className="font-medium">User {review}</p>
                                             <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                   <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                                ))}
                                             </div>
                                          </div>
                                       </div>
                                       <p className="text-gray-700">
                                          This is an amazing psychological thriller that kept me on the edge of my seat. The plot twists are
                                          incredible and the character development is superb.
                                       </p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </TabsContent>

                        <TabsContent value="related" className="p-6">
                           <div>
                              <h3 className="text-lg font-semibold mb-4">Related Books</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                 {book.relatedBooks.map((relatedBook) => (
                                    <div key={relatedBook.id} className="text-center group cursor-pointer">
                                       <div className="relative">
                                          <img
                                             src={relatedBook.cover || "/placeholder.svg"}
                                             alt={relatedBook.title}
                                             className="w-full rounded-lg mb-2 shadow-md group-hover:shadow-lg transition-shadow duration-200"
                                             style={{ aspectRatio: "3/4" }}
                                          />
                                       </div>
                                       <h4 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                                          {relatedBook.title}
                                       </h4>
                                       <p className="text-xs text-gray-600">{relatedBook.author}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </TabsContent>
                     </Tabs>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
