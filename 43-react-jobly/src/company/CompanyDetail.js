import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import JobsCardList from "../job/JobsCardList";
import JoblyApi from "../api";
import "./company.css";

const CompanyDetail = () => {
    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(function getCompanyDetail() {
        async function getDetails(){
            setCompany(await JoblyApi.getCompany(handle));
        }
        getDetails();
    }, [handle]);

    if (!company) return <p>Loading...</p>

    return (
        <div className="CompanyDetail">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <JobsCardList jobs={company.jobs}/>
        </div>
    )
}

export default CompanyDetail;