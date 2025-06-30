import { IndianRupee } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
const JobCard=({job,onApply})=>{
    const [isExpanded,setisExpanded]=useState(false);
    return(
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h2>
                    <p className="text-gray-500 text-sm">{job.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{job.location}</p>
                </div>
                <span className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm' >
                    &#8377;
                    {/* <IndianRupee size={14}/> */}
                    {job.salary}
                    </span>
            </div>
            <div className='mb-4'>
                <p className='text-gray-700 text-sm mt-2 line-clamp-3 '>
                    { isExpanded? job.description:`${job.description.substring(0,100)}`}
                </p>
                <button 
                    onClick={()=>setisExpanded(!isExpanded)}
                    className='text-blue-600 hover:text-blue-800 text-sm mt-2'
                >
                {isExpanded?'Show Less':"Read More"}
                </button>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex flex-wrap gap-2'>
                    {job.skills.map((skill,index)=>{
                        return <span
                        className='bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-lg'        
                        key={index}>{skill}</span>
                    })}

                </div>
                <Button onClickHandler={()=>{
                    onApply(job.id)
                    }} > Apply Now </Button>
                    
            </div>
        </div>
    );
}

export default JobCard