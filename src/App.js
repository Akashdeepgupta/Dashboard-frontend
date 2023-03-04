// import './App.css';
import Sidebar from './components/Navbar/navbar';
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
import Dashboard from './pages/dashboard/index';
import Projects from './pages/projects/index';
import Sales from './pages/sales/index';
import Settings from './pages/settings/index';
import Users from './pages/users/index';





function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;