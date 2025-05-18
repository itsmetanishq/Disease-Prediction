
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              <span className="text-health-700">AI-Powered</span> Disease Prediction at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Early detection saves lives. Our advanced AI algorithms analyze your symptoms and medical data to predict potential health risks.
            </p>
            <div className="pt-4">
              <SearchBar />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Button className="bg-health-600 hover:bg-health-700 text-white">Start Assessment</Button>
              <Button variant="outline" className="border-health-600 text-health-700 hover:bg-health-50">Learn More</Button>
            </div>
            
            <div className="pt-4 flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-health-800">17+</p>
                <p className="text-sm text-gray-500">Diseases</p>
              </div>
              <div className="h-10 border-r border-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-health-800">95%</p>
                <p className="text-sm text-gray-500">Accuracy</p>
              </div>
              <div className="h-10 border-r border-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-health-800">24/7</p>
                <p className="text-sm text-gray-500">Availability</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-health-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-healing-100 rounded-full opacity-50"></div>
            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                alt="AI Disease Prediction" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-healing-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">AI Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
