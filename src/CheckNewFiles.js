import React, { useEffect, useState } from "react";
import axios from 'axios';


function CheckNewFiles(props){

let [dateCheckFiles, setDateCheckFiles] = useState('')

const checkNewStatements = () => {
    //event.preventDefault();
    //let statements = CheckNewFiles()
    console.log('Check new statements')
    
    axios.get('/check-new-statements').then((response =>{
        props.setNewStatements(response.data)
    }))
    .then(
        //document.title = `${props.newStatements} new files to upload`
        setDateCheckFiles(new Date().toLocaleString("en-US") + "")
    );
    }


return(
    <div className='container'>
        <div className='body-button-container'>
            <button className="btn btn-light" onClick={checkNewStatements} >
                Check new statements
            </button>
            <p>
                {props.newStatements} new file(s) to upload
            </p>
            <p>
                Last Check : {dateCheckFiles} 
            </p>
        </div>
    </div>
) 
  
}

export default CheckNewFiles;