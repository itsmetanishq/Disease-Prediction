import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load datasets
dataset = pd.read_csv('Dataset/dataset.csv')
symptoms_severity = pd.read_csv('Dataset/Symptom-severity.csv')
symptom_description = pd.read_csv('Dataset/symptom_Description.csv')
symptom_precaution = pd.read_csv('Dataset/symptom_precaution.csv')

def preprocess_data(df):
    # Clean column names
    df.columns = [col.strip() for col in df.columns]
    
    # Create symptom list
    symptoms = []
    for col in df.columns[1:]:
        symptoms.extend(df[col].dropna().unique())
    symptoms = list(set(symptoms))
    
    # Create binary features
    for symptom in symptoms:
        df[symptom] = df.apply(lambda row: 1 if symptom in row.values else 0, axis=1)
    
    # Drop original symptom columns
    df = df.drop(columns=[col for col in df.columns if col not in symptoms and col != 'Disease'])
    
    # Encode target variable
    le = LabelEncoder()
    df['Disease'] = le.fit_transform(df['Disease'])
    
    return df, le

# Preprocess the data
df, label_encoder = preprocess_data(dataset)

# Split the data
X = df.drop('Disease', axis=1)
y = df['Disease']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model and label encoder
joblib.dump(model, 'models/disease_prediction_model.pkl')
joblib.dump(label_encoder, 'models/label_encoder.pkl')

# Create symptom severity dictionary
symptom_severity_dict = dict(zip(symptoms_severity['Symptom'].values, symptoms_severity['weight'].values))
joblib.dump(symptom_severity_dict, 'models/symptom_severity.pkl')

# Create disease description dictionary
disease_description_dict = dict(zip(symptom_description['Disease'].values, symptom_description['Description'].values))
joblib.dump(disease_description_dict, 'models/disease_description.pkl')

# Create disease precaution dictionary
disease_precaution_dict = dict(zip(symptom_precaution['Disease'].values, symptom_precaution.values[:, 1:]))
joblib.dump(disease_precaution_dict, 'models/disease_precaution.pkl')

print('Model training completed and all artifacts saved.')
