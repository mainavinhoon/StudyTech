
import './App.css';
import {Route,Routes} from "react-router-dom"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (
    <div className="w-screen min-h-screen   flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
      /> 
      <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
      /> 
      <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
      /> 
        {/* <Route path="dashboard/my-profile" element={<MyProfile />} /> */}
{/*       
      <Route path="dashboard/Settings" element={<Settings />} /> */}

      </Routes>

    
    </div>
  );
}

export default App;
