import { useEffect, useState } from "react";
import JobCard from "../components/job/JobCard";
// import { useNavigate } from "react-router-dom";
import useJobStore from "../store/jobStore";
import { useNavigate } from "react-router-dom";

const Jobs=()=>{
    const {jobs,loading,fetchJobs} = useJobStore();
    const [searchTerm, setsearchTerm] = useState("")
    const[filteredJobs,setFilteredJobs]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        //component did mount
        fetchJobs();
    },[])
    useEffect(()=>{
        // console.log("Searchterm updated:"+searchTerm)
        // if(searchTerm.length==0)
        // {
        //     setFilteredJobs(jobs);
        // }

        const filtered=jobs.filter((job)=>{
            return job.title.toLowerCase().includes(searchTerm.toLowerCase())||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setFilteredJobs(filtered);
    },[searchTerm],jobs)//jitni baar value change kare utni baar aaye
    // const filteredJobs=[
    //     {
    //         id:'0',
    //         title:"Data Analyst", 
    //         company:"ABC Corp.",
    //         location:"Earth",
    //         salary:"50K",
    //         description:"This is Urgent hiring for very imp role in my company nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu",
    //         skills:["HTML","CSS"]
    // },
     
    // {
    //     id:'1',
    //     title:"Data Analyst", 
    //     company:"ABC Corp.",
    //     location:"Earth",
    //     salary:"50K",
    //     description:"This is Urgent hiring for very imp role in my company nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu",
    //     skills:["HTML","CSS"]}
    // ]
        
    if(loading)
    {
        return <div className="flex items-center justify-center h-[60vh]">
      <p className="text-4xl font-semibold text-gray-600 animate-pulse">
            Finding opportunities...
            </p>
        </div>
    }
    return(
        <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Find your Dream Job</h1>
            <div className="m-6">
                <input
                 className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
                 type="text"
                 placeholder="Search jobs by title or company"
                 value={searchTerm}  
                 onChange={(e)=>{setsearchTerm(e.target.value)}}
                 />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job,index)=>{
                    return <JobCard 
                        key={job.id}
                        job={job}
                        onApply={(jobid)=>{navigate(`/jobs/${jobid}`)}}
                    />
                })}
            </div>
        </div>    
        </div>
    );
}
export default Jobs;