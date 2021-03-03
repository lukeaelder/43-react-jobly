import React from "react";
import {Link} from "react-router-dom";
import "./company.css";

const CompanyCard = ({name, description, logoUrl, handle}) => {
    return (
        <Link className="CompanyCard" to={`/companies/${handle}`}>
            <div className="CompanyCard-card">
                <h4>{name}</h4>
                {logoUrl && <img src={logoUrl} alt={name}/>}
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default CompanyCard;