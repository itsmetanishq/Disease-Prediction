
import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-health-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Check Your Health Status?</h2>
          <p className="text-xl text-health-100 mb-8">
            Start by searching for symptoms or specific diseases to get predictions
          </p>
          
          <div className="mb-8">
            <SearchBar 
              fullWidth={true} 
              placeholder="Enter symptoms or disease name..."
              buttonText="Get Prediction"
              className="mx-auto"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-health-700 hover:bg-health-50">
              Book Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-health-700">
              Download Health Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
