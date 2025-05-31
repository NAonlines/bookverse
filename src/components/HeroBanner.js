"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroBanner() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

   const featuredBooks = [
      {
         id: 1,
         title: "The Silent Patient",
         author: "Alex Michaelides",
         cover: "/images/Book1.jpg",
         number: "NO. 1",
         description:
            "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
         tags: ["THRILLER", "MYSTERY", "PSYCHOLOGICAL"],
      },
      {
         id: 2,
         title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
         author: "James Clear",
         cover: "/images/Book2.jpg",
         number: "NO. 2",
         description:
            "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
         tags: ["SELF-HELP", "PRODUCTIVITY", "PSYCHOLOGY"],
      },
      {
         id: 3,
         title: "The Midnight Library",
         author: "Matt Haig",
         cover: "/images/Book3.jpg",
         number: "NO. 3",
         description:
            "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
         tags: ["FICTION", "FANTASY", "CONTEMPORARY"],
      },
   ];

   const nextSlide = () => {
      setCurrentSlide((prev) => (prev === featuredBooks.length - 1 ? 0 : prev + 1));
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
   };

   const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? featuredBooks.length - 1 : prev - 1));
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
   };

   // Auto-play functionality
   useEffect(() => {
      let interval;
      if (isAutoPlaying) {
         interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === featuredBooks.length - 1 ? 0 : prev + 1));
         }, 7000); // Change slide every 7 seconds
      }
      return () => clearInterval(interval);
   }, [isAutoPlaying, featuredBooks.length]);

   const book = featuredBooks[currentSlide];

   return (
      <div className="relative w-full">
         {/* Navigation on top of banner */}

         <div className="relative overflow-hidden bg-white text-gray-900 w-full">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${book.cover})` }}></div>

            {/* Bottom gradient overlay to blend with page background */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>

            <div className="w-full pt-16 pb-12 relative z-10">
               <div className="flex flex-col lg:flex-row items-start gap-8 py-8 px-4 md:px-8 lg:px-16 xl:px-24">
                  {/* Book cover with title */}
                  <div className="w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
                     <h3 className="text-lg font-bold text-gray-800 mb-4">Popular New Titles</h3>
                     <div className="relative group transform hover:scale-105 transition-transform duration-300">
                        {/* Book cover / ảnh trong của banner */}
                        <img
                           src={book.cover || "/placeholder.svg"}
                           alt={book.title}
                           className="w-full h-auto shadow-2xl hover:shadow-3xl transition-shadow duration-300 object-cover aspect-[3/4] border border-gray-200"
                           style={{
                              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
                              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                           }}
                        />
                        {/* Optional: Add a subtle glow effect */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                     </div>
                  </div>

                  {/* Book details */}
                  <div className="w-full lg:w-2/3 xl:w-3/4 space-y-5">
                     <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">{book.title}</h2>

                     <div className="flex flex-wrap gap-2 my-3">
                        {book.tags.map((tag) => (
                           <Badge key={tag} className="bg-blue-400 text-xs rounded-md hover:bg-blue-500 text-white">
                              {tag}
                           </Badge>
                        ))}
                     </div>

                     <p className="text-sm md:text-base text-gray-700 line-clamp-6 md:line-clamp-none">{book.description}</p>

                     <div className="flex items-center justify-between mt-6">
                        <p className="text-sm text-gray-600">{book.author}</p>
                        <p className="font-bold text-gray-900">{book.number}</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20 ">
               <button
                  onClick={prevSlide}
                  className="p-2 rounded-md bg-white/80 hover:bg-gray-200  shadow-md transition-colors  cursor-pointer"
                  aria-label="Previous slide"
               >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
               </button>
               <button
                  onClick={nextSlide}
                  className="p-2 rounded-md bg-white/80 hover:bg-gray-200 shadow-md transition-colors  cursor-pointer"
                  aria-label="Next slide"
               >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
               </button>
            </div>
         </div>
      </div>
   );
}
