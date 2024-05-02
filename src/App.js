import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkloadView from './components/WorkloadView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkloadView />} />
      </Routes>
    </Router>
  );
}

export default App;
