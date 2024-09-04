
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Homepage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        if (Array.isArray(response.data)) {
          setJobs(response.data);
        } else {
          setJobs([]);
          console.error('Unexpected response format:', response.data);
          setError('Unexpected data format. Please try again later.');
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load job listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div 
            key={`${job.title}-${job.company}`} 
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link 
              to={`/apply/${encodeURIComponent(job.title)}/${encodeURIComponent(job.company)}`} 
              className="block"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.company}</p>
                <p className="text-gray-500">
                  {job.description.length > 100 ? `${job.description.substring(0, 100)}...` : job.description}
                </p>
              </div>
              <div className="bg-gray-100 p-4">
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Apply Now
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
