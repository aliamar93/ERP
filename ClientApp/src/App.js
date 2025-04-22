import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
// import './custom.css';// Import the Login component
// import Login from './components/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const location = useLocation();

  // Check if the current path is '/login' or any other page that shouldn't use Layout
  const excludedRoutes = ['/Login', '/SignUp', '/forgot-password','/Reset','/Profile'];  // Add more routes you want to exclude

  const isExcludedRoute = excludedRoutes.includes(location.pathname ==="/"?"/Login": location.pathname);

  return (
    // <Layout>
    //   <Routes>
    //     {AppRoutes.map((route, index) => {
    //       const { element, ...rest } = route;
    //       return <Route key={index} {...rest} element={element} />;
    //     })}
    //   </Routes>
    // </Layout>
    <>
      {!isExcludedRoute ? (  // If it's not the Login page, use Layout
        <Layout>
          <>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
            </>
        </Layout>
      ) : (
        // Render Login page without Layout
        <>
        <Routes>
           {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route  key={index} {...rest} element={element} />;
            })}
          {/* <Route path="/" element={<Login />} /> */}
        </Routes>
          
          <ToastContainer position="top-right" autoClose={3000} />
        </>
      )}
    </>
  );
};

App.displayName = 'App';

export default App;
