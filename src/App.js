import { Route, Routes } from "react-router-dom";
import SignUpAdmin from "./components/Auth/SignUp/SignUpAdmin";
import Additems from "./components/UserDashboard/Dashboard/AddItem";
import AdminDashboard from "./components/UserDashboard/Dashboard/AdminDashboard";
import ViewItem from "./components/UserDashboard/Dashboard/ViewItem";
import AdminViewItem from "./components/UserDashboard/Dashboard/AdminViewItem";

import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

import UserDashboardPage from "./pages/User/UserDashboardPage";


function App() {


  return (
    <>
      <Routes>
        {/* <UserContext.Provider> */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
       
        <Route path="/signUpAdmin" element={<SignUpAdmin />}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
        
        <Route path="/Additem" element={<Additems/>}/>
        <Route path="/ViewItem" element={<ViewItem/>}/>
        <Route path="/AdminViewItem" element={<AdminViewItem/>}/>


        {/* </UserContext.Provider> */}
      </Routes>
    </>
  );
}

export default App;
