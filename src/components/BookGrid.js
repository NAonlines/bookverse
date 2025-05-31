"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BookGrid({ activeTab, searchQuery }) {

      // Dữ liệu tạm
      // Mock data for books
      const allBooks = [
            {
                  id: 1,
                  title: "The Silent Patient",
                  author: "Alex Michaelides",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$19.99",
                  originalPrice: "$24.99",
                  rating: 4.6,
                  category: "Thriller",
                  releaseDate: "2023-01-15",
                  popular: true,
                  recommended: true,
            },
            {
                  id: 2,
                  title: "Atomic Habits",
                  author: "James Clear",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$18.99",
                  originalPrice: "$22.99",
                  rating: 4.8,
                  category: "Self-Help",
                  releaseDate: "2023-02-10",
                  popular: true,
                  recommended: true,
            },
            {
                  id: 3,
                  title: "The Midnight Library",
                  author: "Matt Haig",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$16.99",
                  originalPrice: "$21.99",
                  rating: 4.5,
                  category: "Fiction",
                  releaseDate: "2023-03-05",
                  popular: false,
                  recommended: true,
            },
            {
                  id: 4,
                  title: "Project Hail Mary",
                  author: "Andy Weir",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$20.99",
                  originalPrice: "$25.99",
                  rating: 4.7,
                  category: "Sci-Fi",
                  releaseDate: "2023-01-20",
                  popular: true,
                  recommended: false,
            },
            {
                  id: 5,
                  title: "The Four Winds",
                  author: "Kristin Hannah",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$17.99",
                  originalPrice: "$23.99",
                  rating: 4.4,
                  category: "Historical Fiction",
                  releaseDate: "2023-02-28",
                  popular: false,
                  recommended: true,
            },
            {
                  id: 6,
                  title: "The Invisible Life of Addie LaRue",
                  author: "V.E. Schwab",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$15.99",
                  originalPrice: "$20.99",
                  rating: 4.3,
                  category: "Fantasy",
                  releaseDate: "2023-03-15",
                  popular: true,
                  recommended: false,
            },
            {
                  id: 7,
                  title: "Klara and the Sun",
                  author: "Kazuo Ishiguro",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$19.49",
                  originalPrice: "$24.49",
                  rating: 4.2,
                  category: "Literary Fiction",
                  releaseDate: "2023-01-25",
                  popular: false,
                  recommended: true,
            },
            {
                  id: 8,
                  title: "The Vanishing Half",
                  author: "Brit Bennett",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$16.49",
                  originalPrice: "$21.49",
                  rating: 4.5,
                  category: "Fiction",
                  releaseDate: "2023-02-15",
                  popular: true,
                  recommended: true,
            },
            {
                  id: 9,
                  title: "Educated",
                  author: "Tara Westover",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$14.99",
                  originalPrice: "$19.99",
                  rating: 4.7,
                  category: "Memoir",
                  releaseDate: "2023-03-10",
                  popular: true,
                  recommended: false,
            },
            {
                  id: 10,
                  title: "Where the Crawdads Sing",
                  author: "Delia Owens",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$15.49",
                  originalPrice: "$20.49",
                  rating: 4.6,
                  category: "Fiction",
                  releaseDate: "2023-01-30",
                  popular: true,
                  recommended: true,
            },
            {
                  id: 11,
                  title: "The Song of Achilles",
                  author: "Madeline Miller",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$14.49",
                  originalPrice: "$19.49",
                  rating: 4.4,
                  category: "Historical Fiction",
                  releaseDate: "2023-02-20",
                  popular: false,
                  recommended: true,
            },
            {
                  id: 12,
                  title: "The House in the Cerulean Sea",
                  author: "TJ Klune",
                  cover: "/placeholder.svg?height=400&width=250",
                  price: "$18.49",
                  originalPrice: "$23.49",
                  rating: 4.8,
                  category: "Fantasy",
                  releaseDate: "2023-03-20",
                  popular: true,
                  recommended: true,
            },
      ]

      const [displayedBooks, setDisplayedBooks] = useState([])

      useEffect(() => {
            let filteredBooks = [...allBooks]

            // Filter by tab
            if (activeTab === "popular") {
                  filteredBooks = filteredBooks.filter((book) => book.popular)
            } else if (activeTab === "recommended") {
                  filteredBooks = filteredBooks.filter((book) => book.recommended)
            } else if (activeTab === "genres") {
                  // For simplicity, just showing all books in genres tab
                  filteredBooks = allBooks
            }

            // Filter by search query
            if (searchQuery) {
                  const query = searchQuery.toLowerCase()
                  filteredBooks = filteredBooks.filter(
                        (book) =>
                              book.title.toLowerCase().includes(query) ||
                              book.author.toLowerCase().includes(query) ||
                              book.category.toLowerCase().includes(query),
                  )
            }

            // Sort by release date for latest tab
            if (activeTab === "latest") {
                  filteredBooks.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
            }

            setDisplayedBooks(filteredBooks)
      }, [activeTab, searchQuery])

      return (
            <div className="p-4">
                  {displayedBooks.length === 0 ? (
                        <div className="text-center py-10">
                              <p className="text-lg">No books found matching your criteria.</p>
                              <p className="text-sm opacity-70 mt-2">Try adjusting your filters or search query.</p>
                        </div>
                  ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                              {displayedBooks.map((book) => (
                                    <div
                                          key={book.id}
                                          className="rounded-lg overflow-hidden bg-gray-50 shadow-md transition-transform hover:scale-105"
                                    >
                                          <div className="relative group">
                                                <img
                                                      src={book.cover || "/placeholder.svg"}
                                                      alt={book.title}
                                                      className="w-full h-[220px] object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                      <div className="flex space-x-2">
                                                            <Button
                                                                  size="icon"
                                                                  variant="ghost"
                                                                  className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white"
                                                            >
                                                                  <ShoppingCart className="h-4 w-4" />
                                                            </Button>
                                                            <Button
                                                                  size="icon"
                                                                  variant="ghost"
                                                                  className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white"
                                                            >
                                                                  <Heart className="h-4 w-4" />
                                                            </Button>
                                                            <Button
                                                                  size="icon"
                                                                  variant="ghost"
                                                                  className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white"
                                                            >
                                                                  <Eye className="h-4 w-4" />
                                                            </Button>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="p-3">
                                                <h3 className="font-medium text-sm line-clamp-1">{book.title}</h3>
                                                <p className="text-xs text-gray-500 mb-1">{book.author}</p>
                                                <div className="flex items-center mb-2">
                                                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                                      <span className="text-xs ml-1">{book.rating}</span>
                                                      <span className="text-xs ml-2 text-gray-500">{book.category}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                      <div className="flex items-center">
                                                            <span className="font-bold text-sm">{book.price}</span>
                                                            <span className="text-xs text-gray-500 line-through ml-2">{book.originalPrice}</span>
                                                      </div>
                                                      <Button size="sm" className="h-7 text-xs bg-blue-400 text-white hover:bg-white hover:text-blue-400 hover:outline hover:outline-1 hover:outline-blue-400 cursor-pointer transition-all duration-200">
                                                            Add
                                                      </Button>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  )}
            </div>
      )
}
