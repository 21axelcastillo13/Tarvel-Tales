import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for v6
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
