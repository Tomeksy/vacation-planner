import { Routes, Route, Navigate } from 'react-router-dom';
import { VacationPlanner } from './pages/VacationPlanner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vacation-planner" replace />} />
      <Route path="/vacation-planner" element={<VacationPlanner />} />
    </Routes>
  );
}

export default App;