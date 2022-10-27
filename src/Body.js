import logoSG from './img/LogoSG.jpg'
import logoNac from './img/LogoNAC.png'
import React, { useEffect, useState } from "react";
import CheckNewFiles from './CheckNewFiles';
import UploadNewStatements from './UploadNewStatements'

function Body(){

    const [newStatements, setNewStatements] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState(0);

return(
<div className='container'>
    <div className='logo-sg-container'>
        <img src={logoSG} alt="Société Générale" />
    </div>
    <div className='logo-nac-container'>
        <img src={logoNac} alt="NAC" />
    </div>
    <div>
        {/*
        {props.userInfo &&
        */}  
            <CheckNewFiles 
                newStatements={newStatements}
                setNewStatements={setNewStatements}
            />
        {/*
        }
        */}
    </div>
    <div>
        {/*
        {props.userInfo && 
        */}  
            <UploadNewStatements 
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
            />
        {/*
        }
        */}
    </div>
</div>
)
}

export default Body;