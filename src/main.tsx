import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// TEMPORARY: Uncomment the maintenance page and comment out the App to disable the website
const MaintenancePage = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh', 
    backgroundColor: '#1a1a1a', 
    color: 'white', 
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧 Under Maintenance</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
      Sanchez Landscaping website is temporarily offline for updates.
    </p>
    <p style={{ fontSize: '1rem', opacity: 0.8 }}>
      We'll be back online shortly. Thank you for your patience.
    </p>
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#2a2a2a', borderRadius: '8px' }}>
      <p style={{ margin: 0 }}>For urgent inquiries, please call:</p>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 'bold' }}>(555) 123-4567</p>
    </div>
  </div>
);

// Toggle between maintenance page and normal app
// createRoot(document.getElementById("root")!).render(<MaintenancePage />);
createRoot(document.getElementById("root")!).render(<App />);
