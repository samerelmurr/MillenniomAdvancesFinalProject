import './App.css';
import {AboutUS, Login, Register, DatingApp, Home, Navbar} from "./Pages/index"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUS" element={<AboutUS />}/>
        <Route path="/DatingApp" element={<DatingApp />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
