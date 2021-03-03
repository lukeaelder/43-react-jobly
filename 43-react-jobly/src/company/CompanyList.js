import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import "./company.css";
import Search from "../Search"

const Companies = () => {
    const [companies, setCompanies] = useState(null);
    
    useEffect(function getCompanies(){
        searchCompanies();
    }, []);

    const searchCompanies = async (name) => {
        let res = await JoblyApi.getCompanies(name);
        setCompanies(res);
    }

    if (!companies) return <p className="centerp">Loading...</p>

    return (
        <div className="CompanyList">
            <Search search={searchCompanies}/>
            {companies.length ?
                <div className="CompanyList-list">
                    {companies.map(c => (
                        <CompanyCard 
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}
                        />
                    ))}
                </div>
            :
                <p className="centerp">Sorry, no results found.</p>
            }
        </div>
    )
}

export default Companies;