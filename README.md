# Disease Prediction System

A comprehensive disease prediction system that uses machine learning to predict diseases based on symptoms and provides detailed information about diseases, their descriptions, and precautions.

## Features

- Disease prediction based on symptoms
- Detailed disease descriptions
- Precautionary measures
- User-friendly interface
- Real-time predictions

## Tech Stack

- Backend: FastAPI (Python)
- Frontend: React + Vite + Tailwind CSS
- Machine Learning: Scikit-learn
- Data Processing: Pandas, NumPy

## Project Structure

```
Disiease-prediction/
├── backend/              # FastAPI backend server
├── frontend/            # React + Vite + Tailwind frontend
├── models/              # Trained ML models (not included in git)
├── notebooks/           # Jupyter notebooks for data analysis
└── requirements.txt     # Python dependencies
```

## Setup Instructions

### Backend Setup

1. Create and activate a Python virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Download the model files:
   - Place the following files in the `models/` directory:
     - `disease_prediction_model.pkl`
     - `label_encoder.pkl`
     - `symptom_severity.pkl`
     - `disease_description.pkl`
     - `disease_precaution.pkl`

4. Start the backend server:
```bash
cd backend
uvicorn main:app --reload
```

### Frontend Setup

1. Install Node.js dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

## API Endpoints

- `GET /symptoms` - Get list of all symptoms
- `GET /diseases` - Get list of all diseases
- `POST /predict` - Predict disease based on symptoms
  - Request body: `{ "symptoms": ["symptom1", "symptom2", ...] }`
  - Response: `{ "disease": "disease_name", "probability": 0.95, "description": "...", "precautions": ["precaution1", "precaution2", ...] }`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Dataset provided by [source]
- Icons from [Heroicons]
- UI components from [Tailwind CSS]
