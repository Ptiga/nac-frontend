import React, { useEffect, useState } from "react";
import axios from 'axios';


function UploadNewStatements(props){



const checkNewStatements = event => {
    //event.preventDefault();
    let files = UploadNewStatements()
    props.setUploadedFiles()
}

useEffect(() => {
    axios.get('/upload-new-statements').then((response =>{
        props.setUploadedFiles(response.data)
    }))
    .then(
        document.title = `${props.uploadedFiles} new files to upload`
    );
    })

return(
    <div className='container'>
        <div className='button-container'>
            <button onClick={() => props.setUploadedFiles()}>
                Upload files
            </button>
            <p>{props.uploadedFiles} file(s) uploaded</p>
        </div>
    </div>
) 
  
}

export default UploadNewStatements;