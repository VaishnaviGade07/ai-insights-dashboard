import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import RecordDetail from "./pages/RecordDetail";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/:id" element={<RecordDetail />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
