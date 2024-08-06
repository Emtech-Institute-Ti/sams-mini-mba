import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormDataMoodleProvider  } from './context/moodle/MoodleContext'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormDataMoodleProvider >
      <App />
    </FormDataMoodleProvider >
  </React.StrictMode>
);
