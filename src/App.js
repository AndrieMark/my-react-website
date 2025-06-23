// import './Component/Appwithdirect.jsx';
import AppWithRedirect from './Component/Appwithdirect.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppWithRedirect />
    </Router>
  );
}

export default App;
