import { useParams } from "react-router-dom";
import useJobStore from "../store/jobStore";

export const JobDetails=()=>{
    const {id}=useParams();
    const {getJobById}=useJobStore();
    const job=getJobById(id);
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Details</h2>

        {job ? (
          <>
            <h1 className="text-xl font-semibold text-blue-600 mb-2">{job.title}</h1>
            <p className="text-gray-700 text-sm mb-4">
              Job ID: <span className="text-gray-900 font-medium">{id}</span>
            </p>

            {/* You can add more fields if available like description, location, salary etc */}
            {/* <p className="text-gray-600">Description: {job.description}</p> */}
          </>
        ) : (
          <p className="text-red-500">Job not found</p>
        )}
      </div>
    </div>
    );
}