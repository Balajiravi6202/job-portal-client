import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/home.jsx';
import JobDetails from './components/jobDetail.jsx';
import ApplicationForm from './components/applicationform.jsx';
import SuccessPage from './components/successpage.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:title/:company" element={<ApplicationForm/>} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
