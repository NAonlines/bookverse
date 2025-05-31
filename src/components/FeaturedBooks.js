"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Này là grid
export default function FeaturedBooks() {

      // này là slide , tức là thanh trạng thái trượt của trang khi bấm < sản phẩm >
      const [currentSlide, setCurrentSlide] = useState(0)
      const sliderRef = useRef(null)


      // dữ liệu tạm
      const featuredBooks = [
            {
                  id: 1,
                  title: "The Silent Patient",
                  author: "Alex Michaelides",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$19.99",
                  discount: "$24.99",
                  tag: "Bestseller",
            },
            {
                  id: 2,
                  title: "Atomic Habits",
                  author: "James Clear",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$18.99",
                  discount: "$22.99",
                  tag: "Popular",
            },
            {
                  id: 3,
                  title: "The Midnight Library",
                  author: "Matt Haig",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$16.99",
                  discount: "$21.99",
                  tag: "New Release",
            },
            {
                  id: 4,
                  title: "Project Hail Mary",
                  author: "Andy Weir",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$20.99",
                  discount: "$25.99",
                  tag: "Featured",
            },
            {
                  id: 5,
                  title: "The Four Winds",
                  author: "Kristin Hannah",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$17.99",
                  discount: "$23.99",
                  tag: "Trending",
            },
      ]


      //tiến lên 
      const nextSlide = () => {
            if (sliderRef.current) {
                  sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
            }
      }

      //tiến lùi
      const prevSlide = () => {
            if (sliderRef.current) {
                  sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
            }
      }

      return (
            <div className="rounded-lg bg-white shadow-md p-4">
                  <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Featured Books</h2>
                        <div className="flex space-x-2">
                              <Button onClick={prevSlide} variant="outline" size="icon" className="border-gray-300 hover:bg-gray-200">
                                    <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button onClick={nextSlide} variant="outline" size="icon" className="border-gray-300 hover:bg-gray-200">
                                    <ChevronRight className="h-4 w-4" />
                              </Button>
                        </div>
                  </div>

                  <div
                        ref={sliderRef}
                        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                        {featuredBooks.map((book) => (
                              <div
                                    key={book.id}
                                    className="flex-none w-[200px] rounded-lg overflow-hidden bg-gray-50 shadow-md transition-transform hover:scale-105"
                              >
                                    <div className="relative">
                                          <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-[280px] object-cover" />
                                          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">{book.tag}</div>
                                    </div>
                                    <div className="p-3">
                                          <h3 className="font-medium text-sm line-clamp-1">{book.title}</h3>
                                          <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                                          <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                      <span className="font-bold text-sm">{book.price}</span>
                                                      <span className="text-xs text-gray-500 line-through ml-2">{book.discount}</span>
                                                </div>
                                                <Button
                                                      size="sm"
                                                      className="h-7 text-xs bg-blue-400 text-white hover:bg-white hover:text-blue-400 hover:outline hover:outline-1 hover:outline-blue-400 cursor-pointer transition-all duration-200"
                                                >
                                                      Add
                                                </Button>



                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      )
}
