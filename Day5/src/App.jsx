import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import Store, { persistor } from './redux/Store';

import './App.css';
import LazySuspense from './components/LazySuspense';

// Import your lazy-loaded components here
const Lazylogin = lazy(()=> import ("./Pages/auth/login"));
const Lazyforgetpass = lazy(()=> import ("./Pages/auth/forgetpassword"));
const Lazyhome = lazy(()=> import ("./Pages/user/Home"));
const LazyProfileUpdate = lazy(() => import ("./Pages/user/ProfileUpdate"));
const LazyStudent = lazy(() => import ("./Pages/user/student"));
const LazyEnroll = lazy(() => import ("./Pages/user/enrol"));
const LazyCourse = lazy(() => import ("./Pages/user/courses"));
const LazyInstitute = lazy(() => import ("./Pages/user/institutes"));
const LazyPayment= lazy(() => import ("./Pages/user/PaymentPage"));
const LazyAdmin= lazy(() => import ("./Pages/admin/admindash"));
const LazyAdminlogin= lazy(() => import ("./Pages/auth/adminlogin"));
const LazyAStudentProfile= lazy(() => import ("./Pages/admin/StudentProfile"));
const LazyAStudentPayment= lazy(() => import ("./Pages/admin/PaymentDetails"));
const LazyAddcourse= lazy(() => import ("./Pages/admin/Addcourse"));
const LazyAddinstitutions= lazy(() => import ("./Pages/admin/Addinstitutions"));

function App() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route exact path="/" element={<Navigate to="/user/login" />}/> {/* Use Navigate component */}
        <Route path="/user/login" element={<LazySuspense component={Lazylogin}/>}/>
        <Route path="/user/forgetpassword" element={<LazySuspense component={Lazyforgetpass}/>}/>
        <Route path="/user/home" element={<LazySuspense component={Lazyhome}/>}/>
        <Route path="/user/profileupdate" element={<LazySuspense component={LazyProfileUpdate}/>}/>
        <Route path="/user/student" element={<LazySuspense component={LazyStudent}/>}/>
        <Route path="/user/enroll" element={<LazySuspense component={LazyEnroll}/>}/>
        <Route path="/user/course" element={<LazySuspense component={LazyCourse}/>}/>
        <Route path="/user/institutes" element={<LazySuspense component={LazyInstitute}/>}/>
        <Route path="/user/payment" element={<LazySuspense component={LazyPayment}/>}/>
        <Route path="/admin/admindash" element={<LazySuspense component={LazyAdmin}/>}/>
        <Route path="/admin/login" element={<LazySuspense component={LazyAdminlogin}/>}/>
        <Route path="/admin/AStudent" element={<LazySuspense component={LazyAStudentProfile}/>}/>
        <Route path="/admin/PaymentDetails" element={<LazySuspense component={LazyAStudentPayment}/>}/>
        <Route path="/admin/Addcourse" element={<LazySuspense component={LazyAddcourse}/>}/>
        <Route path="/admin/Addinstitutions" element={<LazySuspense component={LazyAddinstitutions}/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
