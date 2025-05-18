
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-health-600 flex items-center justify-center">
              <span className="text-white font-bold">MP</span>
            </div>
            <span className="text-xl font-bold text-health-800">MediPredict</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#" className="font-medium text-gray-900 hover:text-health-600 transition-colors">Home</a></li>
          <li><a href="#diseases" className="font-medium text-gray-900 hover:text-health-600 transition-colors">Diseases</a></li>
          <li><a href="#about" className="font-medium text-gray-900 hover:text-health-600 transition-colors">About</a></li>
          <li><a href="#contact" className="font-medium text-gray-900 hover:text-health-600 transition-colors">Contact</a></li>
        </ul>
        
        <div className="hidden md:block">
          <Button className="bg-healing-600 hover:bg-healing-700 text-white">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-b border-gray-100 animate-fade-in">
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="block py-2 font-medium text-gray-900 hover:text-health-600" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#diseases" className="block py-2 font-medium text-gray-900 hover:text-health-600" onClick={() => setMobileMenuOpen(false)}>Diseases</a></li>
            <li><a href="#about" className="block py-2 font-medium text-gray-900 hover:text-health-600" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#contact" className="block py-2 font-medium text-gray-900 hover:text-health-600" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            <li className="pt-2">
              <Button className="w-full bg-healing-600 hover:bg-healing-700 text-white">Get Started</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
