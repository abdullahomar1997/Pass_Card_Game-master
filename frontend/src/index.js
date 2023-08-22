import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import App from './App'; // Import your main application component
import './index.css';

const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = createRoot(rootElement);
root.render(<App />);

