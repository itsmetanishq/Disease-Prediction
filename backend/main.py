from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from typing import List, Dict
import os

app = FastAPI(title="Disease Prediction API")

# Get the absolute path to the models directory
current_dir = os.path.dirname(os.path.abspath(__file__))
models_dir = os.path.join(os.path.dirname(current_dir), 'models')

# Load models and dictionaries
model = joblib.load(os.path.join(models_dir, 'disease_prediction_model.pkl'))
label_encoder = joblib.load(os.path.join(models_dir, 'label_encoder.pkl'))
symptom_severity = joblib.load(os.path.join(models_dir, 'symptom_severity.pkl'))
disease_description = joblib.load(os.path.join(models_dir, 'disease_description.pkl'))
disease_precaution = joblib.load(os.path.join(models_dir, 'disease_precaution.pkl'))

class PredictionRequest(BaseModel):
    symptoms: List[str]

class PredictionResponse(BaseModel):
    disease: str
    probability: float
    description: str
    precautions: List[str]

@app.post("/predict", response_model=PredictionResponse)
async def predict_disease(request: PredictionRequest):
    try:
        # Get symptom features
        symptoms = request.symptoms
        symptom_features = np.zeros(len(symptom_severity))
        
        # Set symptom features based on severity
        for symptom in symptoms:
            if symptom in symptom_severity:
                symptom_features[list(symptom_severity.keys()).index(symptom)] = symptom_severity[symptom]
        
        # Make prediction
        prediction = model.predict([symptom_features])[0]
        probability = model.predict_proba([symptom_features]).max()
        
        # Get disease name
        disease = label_encoder.inverse_transform([prediction])[0]
        
        # Get additional information
        description = disease_description.get(disease, "Description not available")
        precautions = disease_precaution.get(disease, ["Precautions not available"])
        
        return PredictionResponse(
            disease=disease,
            probability=float(probability),
            description=description,
            precautions=precautions.tolist()
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/symptoms")
async def get_symptoms():
    return list(symptom_severity.keys())

@app.get("/diseases")
async def get_diseases():
    return list(disease_description.keys())
