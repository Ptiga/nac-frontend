function DetailledResultDisplay(props){

    
    console.log('ESSAI 2 - detail to display: ', props)
    //console.log('key: ', props.key)
    console.log('Fonds: ', props.id)
    console.log('Fonds: ', props.fonds)
    console.log('Alerte: ', props.alerte)
    
    return(
        <div>
            <p>
                <b>Result ID </b>: {props.id}
            </p>
            <p>
            <b>Fund </b>: 
            </p>
            <p>
                {props.codeFonds} - {props.nomFonds}
            </p>
            <br />
            <p>
            <b>NAV date </b>:  {props.navDate}
            </p>
            <p>
            <b>Security</b>  ({props.securityType}) : {props.securityCode} ({props.securityLabel})
            </p>
            <p>
            <b>Cours veille </b> : {props.priorPrice} {props.priorCurrency} (<b>date </b>: {props.priorDatePrice})
            </p>
            <p>
            <b>Cours jour </b> : {props.currentPrice} {props.currentCurrency} (<b>date </b>: {props.fluctuation})
            </p>
            <p>
            <b>fluctuation </b> : {props.fluctuation}% - <b>Threshold </b>: {props.threshold}%
            </p>
            <p>
            <b>Alert type </b> : {props.alertType}
            </p>
            <p>
            <b>operator comment </b> : {props.operatorComment==='null' ? 'No comment yet':props.operatorComment}
            </p>
            <p>
            <b>supervisor comment</b> : {props.supervisorComment==='null' ? 'No comment yet':props.supervisorComment}
            </p>
        </div>
    )
    
    
    }
    
    export default DetailledResultDisplay;