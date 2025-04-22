
import Reset from "./components/Reset/Reset";
import Login from "./components/Login/Login";
import  SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile"; 
import DashBoard from './components/DashBoard/DashBoard'
import Shift from './components/Shift/Shift'

const AppRoutes = [
  {
    index: true,
    // path: '',
    element: <Login />,
    
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/Reset',
    element: <Reset />
  },
  {
    path: '/Profile',
    element: <Profile />
  },
  {
    path:'/Shift',
    element:<Shift/>
  },
  {
    path:'/Dashboard',
    element:<DashBoard/>
  }
];

export default AppRoutes;
