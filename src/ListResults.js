import React, { useEffect, useState } from "react";
import Result from "./Result";
import './ListResults.scss';
import axios from "axios";
   
const ListResults = () => {

let [resultList, setResultList] = useState([])

useEffect(() => {
    axios.get('/results').then(response => {
        setResultList(response.data)
    })
}, [])
   
return (
    <div className="container">
        <div className="button-container">
            <button className="btn btn-light" onClick={() => window.location.reload(false)}>Refresh results</button>
        </div>
        <div className="list-container ">
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