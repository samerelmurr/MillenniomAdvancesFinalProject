import './App.css';
import {AboutUS, Login, Register, DatingApp, Home, ContactUS} from "./Pages/index";
import {Profile} from "./Components/componentsIndex";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Provider} from 'react-redux';
// import { configurePersistor, configureStore } from './Redux/store/store';

// const store = configureStore();

function App() {
  return (
    // <Provider store={store}>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ContactUS" element={<ContactUS />}/>
          <Route path="/AboutUS" element={<AboutUS />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/DatingApp" element={<DatingApp />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
        </Routes>
      </Router>
    // </Provider>
  );
}

export default App;
