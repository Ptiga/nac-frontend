import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Result from "./Result";
import './ListResults.scss';
import axios from "axios";
   
const ListResults = () => {

let [resultList, setResultList] = useState([])

let rfr = useNavigate()

useEffect(() => {
    axios.get('/results')
    .then(response => {
        setResultList(response.data)
    })
}, [])
   
const handleChange = (event) => {
    event.preventDefault();
    rfr('/results/refresh')
}

return (
    <div className="container">
        <div className="results-button-container">
            <Link to='/results/refresh'>
                <button className="btn btn-light">Refresh results
                </button>
            </Link>
        </div>

        <div className="list-container list-result-container">
            {resultList.length === 0 ? "Pas de résultats à afficher":null}
            {resultList.map((result, key) => (<div key={key} className="listresults.container">
                <Result 
                id={result.id}
                codeFonds={result.codeFonds}
                nomFonds={result.nomFonds}
                navDate={result.navDate}
                controlName={result.controlName}
                securityCode={result.securityCode}
                securityLabel={result.securityLabel}
                securityType={result.securityType}
                priorDatePrice={result.priorDatePrice}
                priorPrice={result.priorPrice}
                priorCurrency={result.priorCurrency}
                currentDatePrice={result.currentDatePrice}
                currentPrice={result.currentPrice}
                currentCurrency={result.currentCurrency}
                fluctuation={result.fluctuation}
                threshold={result.threshold}
                alertType={result.alertType}
                operatorComment={result.operatorComment}
                supervisorComment={result.supervisorComment}
                resultValidated={result.resultValidated}
                activatedLine={result.activatedLine}
            /></div>))}
        </div>
    </div>
)
}

export default ListResults;