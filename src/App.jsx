// import Button from "./components/ui/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobCard from "./components/job/JobCard";
import Jobs from "./pages/Jobs";
import { Home } from "./pages/Home";
import { JobDetails } from "./pages/JobDetails";

const App=()=>{
    return(
        // <Button
        //     onClickHandler={()=>{}}
        //     children="Login"
        //     colorVariant="success"
        // />
        // <div>
        //     <JobCard job={{title:"Data Analyst", company:"ABC Corp.",location:"Earth",salary:"50K",description:"This is Urgent hiring for very imp role in my company nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu nkjnkjnsgkjns kjgnjengkjdn gjksngkjsngkjs ngkjngjndkjnjkdgn kjdngkjndkjgnkjnsjnjk nkjsngjsnvkjnkjbnsj nvjsnvkjsnvkjsnvkjsnvsnk jifjwoiefhiuaghfbah jkanjgiuhgfiuaejnadvndoghushgiuahfjanbgkjsnbjsbg aiugajbnjnbjngsnbsianvoani jgiohrgiuriu",skills:["HTML","CSS"]}} />
                
        // </div>
        // <Jobs/>
        
           <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/jobs/:id" element={<JobDetails />} />
            </Routes>
            
           </Router>
       

    );
}
export default App;
