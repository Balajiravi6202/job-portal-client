import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const SuccessPage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <CheckCircleIcon className="h-16 w-16 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Application Submitted
      </h1>
      <p className="text-gray-700 text-center max-w-lg">
        Thank you for applying! We have received your application and will
        review it shortly. You will hear back from us soon.
      </p>
    </div>
  );
};

export default SuccessPage;
