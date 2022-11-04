import React, { useEffect, useState } from "react";
import axios from 'axios';


function UploadNewStatements(props){

let [dateUpload, setDateUpload] = useState('')

const uploadNewStatements = () => {
        //event.preventDefault();
        //let statements = CheckNewFiles()
        console.log('Upload new files')
        
        axios.get('/upload-new-statements').then((response =>{
            props.setUploadedFiles(response.data)
        }))
        .then(
            //document.title = `${props.uploadedFiles} new files to upload`
            setDateUpload(new Date().toLocaleString("en-US") + "")
        );
        }

console.log('date: ', dateUpload)

return(
    <div className='container'>
        <div className='body-button-container'>
            <button className="btn btn-info" onClick={uploadNewStatements}>
                Upload files
            </button>
            <p>
                {props.uploadedFiles} file(s) uploaded
            </p>
            <p>
                Last upload : {dateUpload} 
            </p>
            
        </div>
    </div>
) 
  
}

export default UploadNewStatements;