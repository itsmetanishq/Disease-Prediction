
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const diseases = [
  {
    id: 1,
    name: "Diabetes",
    description: "Prediction based on glucose levels, BMI, age, and other factors",
    icon: "🩸"
  },
  {
    id: 2, 
    name: "Heart Disease",
    description: "Analysis of heart health indicators including blood pressure and cholesterol",
    icon: "❤️"
  },
  {
    id: 3,
    name: "Pneumonia",
    description: "Detection through X-ray image analysis and symptom evaluation",
    icon: "🫁"
  },
  {
    id: 4,
    name: "Skin Cancer",
    description: "Identification of potential melanoma and other skin conditions",
    icon: "🔬"
  },
  {
    id: 5,
    name: "COVID-19",
    description: "Assessment based on symptoms and risk factors",
    icon: "🦠"
  },
  {
    id: 6,
    name: "Alzheimer's",
    description: "Early detection through cognitive testing and medical history",
    icon: "🧠"
  },
  {
    id: 7,
    name: "Liver Disease",
    description: "Analysis of liver function tests and risk indicators",
    icon: "🫁"
  },
  {
    id: 8,
    name: "Kidney Disease",
    description: "Evaluation of kidney function and health metrics",
    icon: "🫘"
  },
  {
    id: 9,
    name: "Parkinson's",
    description: "Detection through movement analysis and symptom evaluation",
    icon: "🤲"
  },
  {
    id: 10,
    name: "Stroke Risk",
    description: "Assessment of stroke likelihood based on health indicators",
    icon: "🩸"
  },
  {
    id: 11,
    name: "Tuberculosis",
    description: "Identification through chest X-rays and symptom analysis",
    icon: "🫁"
  },
  {
    id: 12,
    name: "Asthma",
    description: "Prediction based on breathing patterns and medical history",
    icon: "💨"
  },
];

const DiseasesSection = () => {
  return (
    <section id="diseases" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Diseases We Can Predict</h2>
          <p className="text-lg text-gray-600">
            Our AI model is trained to predict 17 different diseases with high accuracy. 
            Early detection is key to successful treatment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diseases.map((disease) => (
            <Card key={disease.id} className="disease-card border-gray-100 shadow-sm hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 text-3xl">{disease.icon}</div>
                <CardTitle className="text-xl text-health-800">{disease.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {disease.description}
                </CardDescription>
                <Button variant="outline" className="w-full border-health-200 text-health-700 hover:bg-health-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            We're constantly working to improve our predictions and add more diseases to our system.
          </p>
          <Button className="bg-health-600 hover:bg-health-700 text-white">
            View All Predictable Diseases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiseasesSection;
