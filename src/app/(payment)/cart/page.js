"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus, ArrowLeft, Calendar, CreditCard } from "lucide-react";

export default function CartPage() {
   const [cartItems, setCartItems] = useState([
      {
         id: 1,
         title: "The Silent Patient",
         author: "Alex Michaelides",
         price: 24.99,
         quantity: 2,
         format: "Hardcover",
         image: "/placeholder.svg?height=120&width=90&text=Silent+Patient",
         genres: ["Thriller", "Mystery", "Psychological"],
      },
      {
         id: 2,
         title: "Atomic Habits",
         author: "James Clear",
         price: 18.99,
         quantity: 1,
         format: "Paperback",
         image: "/placeholder.svg?height=120&width=90&text=Atomic+Habits",
         genres: ["Self-Help", "Psychology", "Productivity"],
      },
      {
         id: 3,
         title: "The Seven Husbands",
         author: "Taylor Jenkins Reid",
         price: 16.99,
         quantity: 2,
         format: "Paperback",
         image: "/placeholder.svg?height=120&width=90&text=Seven+Husbands",
         genres: ["Fiction", "Romance", "Historical"],
      },
   ]);

   const [paymentMethod, setPaymentMethod] = useState("card");

   const updateQuantity = (id, newQuantity) => {
      if (newQuantity === 0) {
         setCartItems((items) => items.filter((item) => item.id !== id));
         return;
      }
      setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
   };

   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const delivery = 0;
   const total = subtotal + delivery;

   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

   return (
      <div className="min-h-screen bg-gray-50 py-8">
         <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
               <ArrowLeft className="w-4 h-4 mr-2" />
               Continue Shopping
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
               {/* Left Side - Order Summary */}
               <div className="bg-white rounded-2xl p-6 h-fit">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="space-y-6">
                     {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4">
                           {/* Book Cover */}
                           <div className="flex-shrink-0">
                              <div className="w-20 h-28 rounded-xl overflow-hidden shadow-sm bg-gray-100">
                                 <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    width={80}
                                    height={112}
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           </div>

                           {/* Book Info */}
                           <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                              <p className="text-gray-600 text-sm mb-2">by {item.author}</p>
                              <p className="text-gray-500 text-sm mb-3">Format: {item.format}</p>

                              {/* Genre Tags */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                 {item.genres.slice(0, 2).map((genre, index) => (
                                    <span
                                       key={index}
                                       className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                    >
                                       {genre}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           {/* Price and Quantity */}
                           <div className="text-right">
                              <div className="text-xl font-bold text-green-700 mb-3">${(item.price * item.quantity).toFixed(2)}</div>

                              {/* Quantity Controls */}
                              <div className="flex items-center justify-end gap-3">
                                 <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                                 >
                                    <Minus className="w-4 h-4" />
                                 </button>
                                 <span className="font-medium text-lg w-8 text-center">{item.quantity}</span>
                                 <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                                 >
                                    <Plus className="w-4 h-4" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Add Coupon Code */}
                  <Button
                     variant="default"
                     className="w-full mt-8 bg-gray-400 hover:bg-gray-500 text-white rounded-xl py-3 text-base font-medium cursor-pointer"
                  >
                     Add Coupon Code →
                  </Button>
               </div>

               {/* Right Side - Shopping Cart */}
               <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-8">
                     <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
                     <span className="text-xl font-semibold text-green-700">{totalItems} Items</span>
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-4 mb-8">
                     <div className="flex justify-between text-lg">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-bold">${subtotal.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-lg">
                        <span className="text-gray-600">Delivery:</span>
                        <span className="font-bold">${delivery.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-xl font-bold border-t pt-4 text-green-700">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                     </div>
                  </div>

                  {/* City and Promo Code */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     <div>
                        <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2 block">
                           City
                        </Label>
                        <div className="relative">
                           <Input id="city" placeholder="Rajkot" className="rounded-xl border-gray-200 pr-10" />
                           <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <Label htmlFor="promo" className="text-sm font-medium text-gray-700 mb-2 block">
                           Promo Code
                        </Label>
                        <div className="relative">
                           <Input id="promo" placeholder="Nov 01, 2023" className="rounded-xl border-gray-200 pr-10" />
                           <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                     </div>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                     <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                        Address
                     </Label>
                     <Input id="address" placeholder="Alpha Plus, Near Raiya Telephone exchange." className="rounded-xl border-gray-200" />
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                     <Label className="text-sm font-medium text-gray-700 mb-4 block">Payment</Label>
                     <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                        <div
                           className={`flex items-center space-x-3 p-4 border rounded-xl transition-colors ${
                              paymentMethod === "delivery" ? "border-blue-200 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                           }`}
                        >
                           <RadioGroupItem value="delivery" id="delivery" />
                           <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                              Payment Delivery
                           </Label>
                        </div>
                        <div
                           className={`flex items-center space-x-3 p-4 border rounded-xl transition-colors ${
                              paymentMethod === "card" ? "border-blue-200 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                           }`}
                        >
                           <RadioGroupItem value="card" id="card" />
                           <Label htmlFor="card" className="flex-1 cursor-pointer">
                              Card Payment
                           </Label>
                        </div>
                        <div
                           className={`flex items-center space-x-3 p-4 border rounded-xl transition-colors ${
                              paymentMethod === "paypal" ? "border-blue-200 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                           }`}
                        >
                           <RadioGroupItem value="paypal" id="paypal" />
                           <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                              PayPal Payment
                           </Label>
                        </div>
                     </RadioGroup>

                     {/* Add Credit Card */}
                     <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mt-4 text-sm">
                        <CreditCard className="w-4 h-4" />
                        Add Credit Card
                     </button>
                  </div>

                  {/* Phone Number */}
                  <div className="mb-6">
                     <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number
                     </Label>
                     <div className="flex gap-2">
                        <Select defaultValue="IN">
                           <SelectTrigger className="w-20 rounded-xl border-gray-200">
                              <SelectValue />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="IN">IN</SelectItem>
                              <SelectItem value="US">US</SelectItem>
                              <SelectItem value="UK">UK</SelectItem>
                           </SelectContent>
                        </Select>
                        <Input id="phone" placeholder="+91 000 000 0000" className="flex-1 rounded-xl border-gray-200" />
                     </div>
                  </div>

                  {/* Expiry Date and CVV */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div>
                        <Label htmlFor="expiry" className="text-sm font-medium text-gray-700 mb-2 block">
                           Expiry Date
                        </Label>
                        <div className="relative">
                           <Input id="expiry" placeholder="Dec, 2025" className="rounded-xl border-gray-200 pr-10" />
                           <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                     </div>
                     <div>
                        <Label htmlFor="cvv" className="text-sm font-medium text-gray-700 mb-2 block">
                           CVV
                        </Label>
                        <Input id="cvv" placeholder="Rajkot" className="rounded-xl border-gray-200" />
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                     <a
                        href="/"
                        type="button"
                        variant="outline"
                        className="flex-1 rounded-xl py-3 text-base text-center text-black font-medium bg-gray-100  border-gray-200 hover:bg-gray-50 cursor-pointer"
                     >
                        Cancel
                     </a>
                     <Button className="flex-1 rounded-xl py-3 text-base text-white font-medium bg-orange-400 hover:bg-orange-500 cursor-pointer">
                        Order
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
