import React from "react";
import JobCard from "./JobCard";

const JobCardList = ({jobs, apply}) => {
    return (
        <div className="JobList">
            {jobs.map(j => (
                <JobCard 
                    key={j.id}
                    id={j.id}
                    title={j.title}
                    salary={j.salary}
                    equity={j.equity}
                    comapnyName={j.companyName}
                />
            ))}
        </div>
    )
}

export default JobCardList;