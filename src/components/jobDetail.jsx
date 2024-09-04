// src/components/JobDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { title, company } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${title}/${company}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [title, company]);

  const handleApply = () => {
    navigate(`/apply/${title}/${company}`);
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-lg font-semibold">{job.company}</p>
      <p className="mt-2 text-gray-700">{job.description}</p>
      <p className="mt-2 text-gray-500">Application Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
      <button
        onClick={handleApply}
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
