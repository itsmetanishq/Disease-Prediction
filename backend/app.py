from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import joblib
import numpy as np
from werkzeug.exceptions import HTTPException


app = Flask(__name__)
CORS(app)

# Load models and dictionaries
model = joblib.load('../models/disease_prediction_model.pkl')
label_encoder = joblib.load('../models/label_encoder.pkl')
symptom_severity = joblib.load('../models/symptom_severity.pkl')
disease_description = joblib.load('../models/disease_description.pkl')
disease_precaution = joblib.load('../models/disease_precaution.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        symptoms = data.get('symptoms', [])
        
        # Get symptom features
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
        
        response = jsonify({
            'disease': disease,
            'probability': float(probability),
            'description': description,
            'precautions': precautions
        })
        response.status_code = 200
        return response
        
    except Exception as e:
        response = jsonify({'error': str(e)})
        response.status_code = 500
        return response

@app.route('/symptoms', methods=['GET'])
def get_symptoms():
    response = jsonify(list(symptom_severity.keys()))
    response.status_code = 200
    return response

@app.route('/diseases', methods=['GET'])
def get_diseases():
    response = jsonify(list(disease_description.keys()))
    response.status_code = 200
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)
