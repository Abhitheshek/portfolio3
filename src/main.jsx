import { StrictMode } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'

import Test from './Test.jsx';
import Index from './Index.jsx'
import SuccessPage from './SuccessPage.jsx';
import UnderConstruction from './UnderConstruction.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/SuccessPage.jsx" element={<SuccessPage />} />
      <Route path="/UnderConstruction.jsx" element={<UnderConstruction />} />
    </Routes>
  </Router>
)
