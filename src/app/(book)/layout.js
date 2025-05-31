import Footer from "@/components/FooterBook";
import Navigation from "@/components/NavigationBook";

export default function PublicLayout({ children }) {
   return (
      <div className="flex flex-col min-h-screen">
         <Navigation />

         {children}
         <Footer />
      </div>
   );
}
