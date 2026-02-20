import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SpreadsheetPage from "./pages/SpreadsheetPage";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      
      {/* Top Navigation */}
      <nav className="bg-slate-900 text-white px-6 py-3 flex gap-6">
        <Link to="/" className="hover:text-green-400">
          Home
        </Link>
        <Link to="/spreadsheet" className="hover:text-green-400">
          Spreadsheet
        </Link>
      </nav>

      {/* Page Content */}
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spreadsheet" element={<SpreadsheetPage />} />
        </Routes>
      </div>
    </div>
  );
}