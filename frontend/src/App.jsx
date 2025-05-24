import { Routes, Route, Link } from 'react-router-dom';
import FoundPage from './Pages/FoundPage';
import LostPage from './Pages/LostPage';

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>IITB Lost & Found</h2>
        <ul>
          <li><Link to="/lost">Lost</Link></li>
          <li><Link to="/found">Found</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/lost" element={<LostPage />} />
          <Route path="/found" element={<FoundPage />} />
          <Route path="*" element={<FoundPage />} />
        </Routes>
      </div>
    </div>
  );
}