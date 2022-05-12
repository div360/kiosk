
import './App.css';
import Otp from './Otp/Otp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './SignIn';
import UserDetails from './UserDetails';

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<SignIn/>} />
    <Route exact path="/otp" element={<Otp/>}/>
    <Route exact path="/user-details" element={<UserDetails/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
