import conanSherlock from './img/Conan-Sherlock.png'


function DetailledResultDisplay(props){
    
    const displayDate = (dateToConvert) => {

        let day = dateToConvert.slice(6,8)
        let month = dateToConvert.slice(4,6)
        let year = dateToConvert.slice(0,4)
       return `${year}/${month}/${day}`
    }

    return(
        <div className="detail-displayed-container">
            <div className='row'>
                <div className='col d-none d-xl-block'>
                    <div className='conan-container'>
                        <img src={conanSherlock} height="500px" alt="Conan Sherlock" />
                    </div>
                </div>
                <div className='col'>
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
                    <b>NAV date </b>:  {displayDate(props.navDate)}
                    </p>
                    <p>
                    <b>Security</b>  ({props.securityType}) : {props.securityCode} ({props.securityLabel})
                    </p>
                    <p>
                    <b>Cours veille </b> : {props.priorPrice} {props.priorCurrency} (<b>date </b>: {displayDate(props.priorDatePrice)})
                    </p>
                    <p>
                    <b>Cours jour </b> : {props.currentPrice} {props.currentCurrency} (<b>date </b>: {displayDate(props.currentDatePrice)})
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
                <div className='col d-none d-xl-block'>
                    <div className='conan-container'>
                        <img src={conanSherlock} height="500px" alt="Conan Sherlock" />
                    </div>
                </div>
            </div>
        </div>

    )
    
    
    }
    
    export default DetailledResultDisplay;