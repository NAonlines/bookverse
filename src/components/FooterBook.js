"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
   //sau này làm xóa , hoặc giữ tùy
   const [email, setEmail] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Subscribing email:", email);
      setEmail("");
   };

   return (
      <footer className=" bg-gray-50 py-16 px-6">
         <div className="mx-auto max-w-[1200px] border-t border-[#eaeaea] pt-8 ">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
               {/* Logo and copyright */}
               <div>
                  <Link href="/" className="text-xl font-bold">
                     Book Store
                  </Link>
               </div>

               {/* Resources */}
               <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Resources</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/docs" className="text-sm text-gray-600 hover:text-black">
                           Docs
                        </Link>
                     </li>
                     <li>
                        <Link href="/support" className="text-sm text-gray-600 hover:text-black">
                           Support Policy
                        </Link>
                     </li>
                     <li>
                        <Link href="/learn" className="text-sm text-gray-600 hover:text-black">
                           Learn
                        </Link>
                     </li>
                     <li>
                        <Link href="/showcase" className="text-sm text-gray-600 hover:text-black">
                           Showcase
                        </Link>
                     </li>
                     <li>
                        <Link href="/blog" className="text-sm text-gray-600 hover:text-black">
                           Blog
                        </Link>
                     </li>
                     <li>
                        <Link href="/team" className="text-sm text-gray-600 hover:text-black">
                           Team
                        </Link>
                     </li>
                     <li>
                        <Link href="/analytics" className="text-sm text-gray-600 hover:text-black">
                           Analytics
                        </Link>
                     </li>
                     <li>
                        <Link href="/events" className="text-sm text-gray-600 hover:text-black">
                           Book Events
                        </Link>
                     </li>
                     <li>
                        <Link href="/previews" className="text-sm text-gray-600 hover:text-black">
                           Previews
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* More */}
               <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">More</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/bookstore-commerce" className="text-sm text-gray-600 hover:text-black">
                           Book Store Commerce
                        </Link>
                     </li>
                     <li>
                        <Link href="/contact-sales" className="text-sm text-gray-600 hover:text-black">
                           Contact Sales
                        </Link>
                     </li>
                     <li>
                        <Link href="/community" className="text-sm text-gray-600 hover:text-black">
                           Community
                        </Link>
                     </li>
                     <li>
                        <Link href="/github" className="text-sm text-gray-600 hover:text-black">
                           GitHub
                        </Link>
                     </li>
                     <li>
                        <Link href="/releases" className="text-sm text-gray-600 hover:text-black">
                           Releases
                        </Link>
                     </li>
                     <li>
                        <Link href="/telemetry" className="text-sm text-gray-600 hover:text-black">
                           Telemetry
                        </Link>
                     </li>
                     <li>
                        <Link href="/governance" className="text-sm text-gray-600 hover:text-black">
                           Governance
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* About Book Store */}
               <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">About Book Store</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/about" className="text-sm text-gray-600 hover:text-black">
                           Book Store + Partners
                        </Link>
                     </li>
                     <li>
                        <Link href="/open-source" className="text-sm text-gray-600 hover:text-black">
                           Open Source Books
                        </Link>
                     </li>
                     <li>
                        <Link href="/github" className="text-sm text-gray-600 hover:text-black">
                           GitHub
                        </Link>
                     </li>
                     <li>
                        <Link href="/bookclub" className="text-sm text-gray-600 hover:text-black">
                           Book Club
                        </Link>
                     </li>
                     <li>
                        <Link href="/twitter" className="text-sm text-gray-600 hover:text-black">
                           Twitter
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Newsletter and Legal */}
               <div>
                  <div className="mb-6">
                     <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Legal</h3>
                     <ul className="space-y-3">
                        <li>
                           <Link href="/privacy" className="text-sm text-gray-600 hover:text-black">
                              Privacy Policy
                           </Link>
                        </li>
                        <li>
                           <Link href="/terms" className="text-sm text-gray-600 hover:text-black">
                              Terms of Service
                           </Link>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Subscribe to our newsletter</h3>
                     <p className="mb-4 text-sm text-gray-600">Stay updated on new releases and features, guides, and case studies.</p>
                     <form onSubmit={handleSubmit} className="flex">
                        <input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="you@domain.com"
                           className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
                           required
                        />
                        <button
                           type="submit"
                           className="rounded-r-md border border-l-0 border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
                        >
                           Subscribe
                        </button>
                     </form>
                  </div>
               </div>
            </div>

            {/* Bottom section with copyright and social links */}
            <div className="mt-12 flex flex-col items-start justify-between  pt-8 md:flex-row md:items-center">
               <p className="text-sm text-gray-500">© {new Date().getFullYear()} Book Store, Inc.</p>
               <div className="mt-4 flex space-x-6 md:mt-0">
                  {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                                          <span className="sr-only">GitHub</span>
                                          <Github className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-500">
                                          <span className="sr-only">Twitter</span>
                                          <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-500">
                                          <span className="sr-only">Facebook</span>
                                          <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-gray-500">
                                          <span className="sr-only">Instagram</span>
                                          <Instagram className="h-5 w-5" />
                                    </a> */}
               </div>
            </div>
         </div>
      </footer>
   );
}
