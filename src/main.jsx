import './index.scss';
import 'tailwindcss/tailwind.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
