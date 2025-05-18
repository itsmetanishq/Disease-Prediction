
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-healing-100 rounded-full opacity-50"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Medical AI Technology" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-2">🧬</div>
                <h4 className="text-lg font-bold text-gray-900">Advanced AI</h4>
                <p className="text-sm text-gray-600">Using state-of-the-art machine learning</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="text-health-600 font-medium mb-2">ABOUT US</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Revolutionizing Healthcare Through AI</h2>
              <p className="text-lg text-gray-600">
                MediPredict is at the forefront of using artificial intelligence to transform how we approach disease prediction and prevention. Our mission is to make healthcare more accessible, efficient, and proactive.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-health-100 rounded-lg flex items-center justify-center">
                  <span className="text-health-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Cutting-edge Technology</h3>
                  <p className="text-gray-600">Our AI models are trained on millions of medical records to ensure high accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-health-100 rounded-lg flex items-center justify-center">
                  <span className="text-health-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Privacy-First Approach</h3>
                  <p className="text-gray-600">Your health data is encrypted and secured with the highest privacy standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-health-100 rounded-lg flex items-center justify-center">
                  <span className="text-health-600 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Expert-Backed</h3>
                  <p className="text-gray-600">Developed in collaboration with leading medical professionals and researchers.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-health-600 hover:bg-health-700 text-white">Learn More About Our Technology</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
