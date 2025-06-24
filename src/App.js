// import './Component/Appwithdirect.jsx';
import AppWithRedirect from './Component/Appwithdirect.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppWithRedirect />
    </Router>
  );
}

export default App;
