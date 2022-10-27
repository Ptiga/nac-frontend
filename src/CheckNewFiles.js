import React, { useEffect, useState } from "react";
import axios from 'axios';


function CheckNewFiles(props){



const checkNewStatements = event => {
    //event.preventDefault();
    let statements = CheckNewFiles()
    props.setNewStatements()
}

useEffect(() => {
    axios.get('/Check-new-statements').then((response =>{
        props.setNewStatements(response.data)
    }))
    .then(
        document.title = `${props.newStatements} new files to upload`
    );
    })

return(
    <div className='container'>
        <div className='button-container'>
            <button onClick={() => props.setNewStatements()}>
                Check new statements
            </button>
            <p>{props.newStatements} new file(s) to upload</p>
        </div>
    </div>
) 
  
}

export default CheckNewFiles;