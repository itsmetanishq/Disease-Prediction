
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  fullWidth?: boolean;
}

const SearchBar = ({ 
  className = "",
  placeholder = "Search diseases, symptoms...",
  buttonText = "Search",
  fullWidth = false
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Implement search functionality here
  };

  return (
    <form onSubmit={handleSearch} className={`flex gap-2 ${fullWidth ? 'w-full' : 'max-w-md'} ${className}`}>
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          className="pl-10 h-12 bg-white border-gray-200 focus:border-health-500"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Button type="submit" className="h-12 px-6 bg-healing-600 hover:bg-healing-700 text-white">
        {buttonText}
      </Button>
    </form>
  );
};

export default SearchBar;
