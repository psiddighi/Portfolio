import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the app is properly mounted with the correct base path
createRoot(document.getElementById("root")!).render(<App />);
