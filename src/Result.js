import axios from "axios";
import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import DetailledResult from "./DetailledResult";

class Result extends React.Component{

    constructor(props){
        super(props)
        this.state = {
                resultData: {
                id: props.id,
                codeFonds: props.codeFonds,
                nomFonds: props.nomFonds,
                navDate: props.navDate,
                controlName: props.controlName,
                securityCode: props.securityCode,
                securityLabel: props.securityLabel,
                securityType: props.securityType,
                priorDatePrice: props.priorDatePrice,
                priorPrice: props.priorPrice,
                priorCurrency: props.priorCurrency,
                currentDatePrice: props.currentDatePrice,
                currentPrice: props.currentPrice,
                currentCurrency: props.currentCurrency,
                fluctuation: props.fluctuation,
                threshold: props.threshold,
                alertType: props.alertType,
                operatorComment: props.operatorComment,
                supervisorComment: props.supervisorComment,
                resultValidated: props.resultValidated,
                activatedLine: props.activatedLine
            }
        }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    }
  

    handleChange(event) {
        let currentState = {...this.state.resultData}
        currentState[event.target.name] = event.target.value
        this.setState({resultData: currentState})
    }

    onSubmit(event) {
        console.log("On Submit - Update result")
        console.log("Result submitted: ", this.state.resultData)
        console.log("Result ID: ", this.state.resultData.id)
        console.log("O-comment submitted: ", this.state.resultData.operatorComment)
        console.log("S-comment submitted: ", this.state.resultData.supervisorComment)
        event.preventDefault();
        axios.put(`/results/${this.state.resultData.id}`, {
            ...this.state.resultData
        })
        //renvoi vers les résultats
        .then(() => {
            //Redirection vers les résultats (pas trop bien compris le navigate sur classes)
            Navigate("/results")
        })
    }

    render(props){
        return (
        <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col" hidden={true} >
                        <label htmlFor='id'>Id</label>
                        <input type='text' id='id' name="id" className='form-control' value={this.state.resultData.id} readOnly="readonly" ></input>
                    </div>
                    <div className="col">
                        <label htmlFor='codeFonds'>Fund code</label>
                        <input type='text' id='codeFonds' name="codeFonds" className='form-control' value={this.state.resultData.codeFonds} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='nomFonds'>Fund name</label>
                        <input type='text' id='nomFonds' name="nomFonds" className='form-control' value={this.state.resultData.nomFonds} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='navDate'>NAV date</label>
                        <input type='text' id='navDate' name="navDate" className='form-control' value={this.state.resultData.navDate} readOnly="readonly" ></input>
                    </div>
                    <div className="col">
                        <label htmlFor='controlName'>Check</label>
                        <input type='text' id='controlName' name="controlName" className='form-control' value={this.state.resultData.controlName} readOnly="readonly" ></input>
                    </div>
                    <div className="col" >
                        <label htmlFor='securityCode'>Isin</label>
                        <input type='text' id='securityCode' name="securityCode" className='form-control' value={this.state.resultData.securityCode} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='securityLabel'>Security label</label>
                        <input type='text' id='securityLabel' name="securityLabel" className='form-control' value={this.state.resultData.securityLabel} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='securityType'>Security type</label>
                        <input type='text' id='securityType' name="securityType" className='form-control' value={this.state.resultData.securityType} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='priorDatePrice'>Prior date price</label>
                        <input type='text' id='priorDatePrice' name="priorDatePrice" className='form-control' value={this.state.resultData.priorDatePrice} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='priorPrice'>Prior price</label>
                        <input type='text' id='priorPrice' name="priorPrice" className='form-control' value={this.state.resultData.priorPrice} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='priorCurrency'>Prior currency</label>
                        <input type='text' id='priorCurrency' name="priorCurrency" className='form-control' value={this.state.resultData.priorCurrency} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='currentDatePrice'>Current date price</label>
                        <input type='text' id='currentDatePrice' name="currentDatePrice" className='form-control' value={this.state.resultData.currentDatePrice} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='currentPrice'>Current price</label>
                        <input type='text' id='currentPrice' name="currentPrice" className='form-control' value={this.state.resultData.currentPrice} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='currentCurrency'>Current currency</label>
                        <input type='text' id='currentCurrency' name="currentCurrency" className='form-control' value={this.state.resultData.currentCurrency} readOnly="readonly" ></input>
                    </div>
                    <div className="col" >
                        <label htmlFor='fluctuation'>Fluctuation</label>
                        <input type='text' id='fluctuation' name="fluctuation" className='form-control' value={this.state.resultData.fluctuation} readOnly="readonly" ></input>
                    </div>
                    <div className="col" >
                        <label htmlFor='threshold'>Threshold</label>
                        <input type='text' id='threshold' name="threshold" className='form-control' value={this.state.resultData.threshold} readOnly="readonly" ></input>
                    </div>
                    <div className="col" >
                        <label htmlFor='alertType'>Alert type</label>
                        <input type='text' id='alertType' name="alertType" className='form-control' value={this.state.resultData.alertType} readOnly="readonly" ></input>
                    </div>
                    <div className="col">
                        <Link to={`/results/${this.state.resultData.id}`}>
                            <button className="btn btn-primary">Détail
                            </button>
                        </Link>
                    </div>
                    <div className="col" >
                        <label htmlFor='operatorComment'>Operator</label>
                        <input type='text' id='operatorComment' name="operatorComment" className='form-control' value={this.state.resultData.operatorComment || ""} onChange={this.handleChange} ></input>
                    </div>
                    <div className="col" >
                        <label htmlFor='supervisorComment'>Supervisor</label>
                        <input type='text' id='supervisorComment' name="supervisorComment" className='form-control' value={this.state.resultData.supervisorComment || ""} onChange={this.handleChange} ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='resultValidated'>Validated</label>
                        <input type='text' id='resultValidated' name="resultValidated" className='form-control' value={this.state.resultData.resultValidated} readOnly="readonly" ></input>
                    </div>
                    <div className="col" hidden={true} >
                        <label htmlFor='activatedLine'>Active</label>
                        <input type='text' id='activatedLine' name="activatedLine" className='form-control' value={this.state.resultData.activatedLine} readOnly="readonly" ></input>
                    </div>
                    <div className="col">
                            <div className="container-submit">
                                <input type="submit" value="Update" className="btn btn-primary"></input>
                            </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }

}

//Fonction qui permet de revenir vers les résultats après 'PUT'
export function Navigate(props){
    const navigate = useNavigate()
    return(
        <Result navigate={navigate}>
        </Result>
    )
}

export default Result;