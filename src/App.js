import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FirstScreen from './Component/FirstScreen';
import Landing from './Component/Landing';
import Footer from './Component/Footer';
import ThirdScreen from './Component/ThirdScreen';
import JobList from './Component/JobList';
import PointForm from './Component/PointForm';
import Fourth from './Component/Fourt';
import FormDetail from './Component/FormDetail';
import Header from './Component/Header';
import NotFound from './NotFound';
import { useState } from 'react';
import './App.css';

function App() {

   return (
    <>
   <Router>
     <Routes>
     <Route path="company" element={<ThirdScreen />} />
      <Route path="JobList" element={<JobList />} />
     <Route path="/" element={<FirstScreen />} />
        <Route path="job_Categories" element={<Landing /> } />
      <Route path="/aboutUs" element={<Fourth />} />
        <Route path="/SubmitForm" element={<PointForm />} />   
        <Route path="/form" element={<FormDetail />} />
     </Routes> 
     <Footer />
     </Router> 
    </>
  );
}

export default App;
