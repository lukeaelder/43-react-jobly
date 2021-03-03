import React, { useContext, useState, useEffect } from "react";
import UserContext from "../user/UserContext";
import "./job.css"

const JobCard = ({id, title, salary, equity, companyName}) => {
    const {hasAppliedToJob, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState();
    
    useEffect(function updateApplied(){
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    const handleApply = async (e) => {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <div className="JobCard">
            <h4>{title}</h4>
            <p>{companyName}</p>
            {salary && <p>Salary: {salary.toLocaleString()}</p>}
            {equity && <p>Equity: {equity}</p>}
            <button onClick={handleApply} disabled={applied}>{applied ? "Applied" : "Apply"}</button>
        </div>
    )
}

export default JobCard;