import {useParams, Link, useNavigate} from 'react-router-dom'
import DetailledResultDisplay from './DetailledResultDisplay'
import React, { useEffect, useState } from "react";
import axios from 'axios';


function DetailledResult(props){

    let{resultId} = useParams();

    console.log('détailled result props: ', props)
    console.log('détailled result props: ', props.id)
    console.log('ID from useParams: ', resultId)

    const [detailledResult, setDetailledResult] = useState([])

    let history = useNavigate()

    useEffect(() => {
        axios.get(`/results/${resultId}`).then((response =>{
            setDetailledResult(response.data)
        }))
    }, [])

console.log("détail to dispatch: ",detailledResult)
console.log(detailledResult.id)
console.log(detailledResult.codeFonds)
console.log("Result - Role : ", props.userRole)



if(props.userRole==='USER' && detailledResult.id === undefined){
    return(
        <div>
            <h3>
                No result to display
            </h3>
            <Link to='/results'>
                <button className="btn btn-primary">Back to results
                </button>
            </Link>
        </div>
    )
}else if(props.userRole==='USER') {
    return(
        <div className='container'>
            <div>
                <h2>Detailled result</h2>  
            </div>
            <div className='detailled-result-container'>
                    <DetailledResultDisplay 
                        id={detailledResult.id}
                        codeFonds={detailledResult.codeFonds}
                        nomFonds={detailledResult.nomFonds}
                        navDate={detailledResult.navDate}
                        controlName={detailledResult.controlName}
                        securityCode={detailledResult.securityCode}
                        securityLabel={detailledResult.securityLabel}
                        securityType={detailledResult.securityType}
                        priorDatePrice={detailledResult.priorDatePrice}
                        priorPrice={detailledResult.priorPrice}
                        priorCurrency={detailledResult.priorCurrency}
                        currentDatePrice={detailledResult.currentDatePrice}
                        currentPrice={detailledResult.currentPrice}
                        currentCurrency={detailledResult.currentCurrency}
                        fluctuation={detailledResult.fluctuation}
                        threshold={detailledResult.threshold}
                        alertType={detailledResult.alertType}
                        operatorComment={detailledResult.operatorComment}
                        supervisorComment={detailledResult.supervisorComment}
                        resultValidated={detailledResult.resultValidated}
                        activatedLine={detailledResult.activatedLine}
                    />
            </div>
            <Link to='/results'>
                <button className="btn btn-primary">Back to results
                </button>
            </Link>
        </div>
    )
}else{
    history('/Oups')
}
}

export default DetailledResult;