
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
import AboutUs from './pages/AboutUs';
import { TypeAnimation } from 'react-type-animation';
import Contact from './pages/Contact';
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error"
import Settings from "./components/core/Dashboard/Settings";
import { useDispatch, useSelector } from "react-redux";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";

function App() {
  
  const { user } = useSelector((state) => state.profile)

  return (
    <div className="w-screen min-h-screen   flex flex-col font-inter">
      <div className='w-screen invisible h-fit md:visible pl-[20%] text-2xl self-center border border-b-2 '>
      <TypeAnimation 
            sequence={["Application is under Developement - Few features aren't accessible",200,""]}
            repeat={Infinity}
            curser={true}
            style={{whiteSpace:"pre-line", display:"block", position:"relative" }}
            omitDeletionAnimation={true} />
        </div>
       
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/catalog/:catalogName" element={<Catalog/>}></Route>
      <Route path="/courses/:courseId" element={<CourseDetails/>} />

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
      <Route
          path="about"
          element={
            <OpenRoute>
              <AboutUs/>
            </OpenRoute>
          }
      /> 

        <Route path="/contact" element={<Contact />} /> 

        <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      
      <Route path="dashboard/Settings" element={<Settings />} />
      

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/instructor" element={<Instructor />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
          </>
        )
      }


    </Route>

    
      <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>



    <Route path="*" element={<Error />} />


      </Routes>

    
    </div>
  );
}

export default App;
