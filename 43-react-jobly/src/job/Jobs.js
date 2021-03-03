import React, {useState, useEffect, useContext} from "react";
import JobsCardList from "./JobsCardList";
import JoblyApi from "../api";
import Search from "../Search"
import UserContext from "../user/UserContext";

const Jobs = () => {
    const [jobs, setJobs] = useState(null);
    const [allJobs, setAllJobs] = useState(null);
    const {appliedJobs} = useContext(UserContext);
    const [filtered, setFiltered] = useState(false);

    useEffect(function getJobs(){
        searchJobs();
    }, []);

    const searchJobs = async (title) => {
        let res = await JoblyApi.getJobs(title);
        setJobs(res);
        setAllJobs(res);
    }

    if (!jobs) return <p className="centerp">Loading...</p>

    const filterJobs = () => {
        let res = jobs.filter(({id}) => appliedJobs.has(id));
        setJobs(res);
        setFiltered(true);
    }

    const unFilterJobs = () => {
        setJobs(allJobs);
        setFiltered(false);
    }

    return (
        <div className="Jobs">
            <Search search={searchJobs}/>
            <p className="centerp">Filter applied jobs: 
                {filtered ?
                    <span onClick={unFilterJobs} checked className="Jobs-on">ON</span>
                :
                    <span onClick={filterJobs} className="Jobs-off">OFF</span>
                }
            </p>
            {jobs.length ?
                <JobsCardList jobs={jobs}/>
            :
                <p className="centerp">Sorry, no result found</p>
            }
        </div>
    )
}

export default Jobs;