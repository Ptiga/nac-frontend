import logoSG from './img/LogoSG.jpg'
import logoNac from './img/LogoNAC.png'
import React, { useEffect, useState } from "react";
import CheckNewFiles from './CheckNewFiles';
import UploadNewStatements from './UploadNewStatements'
import './Body.scss';

function Body(props){

    const [newStatements, setNewStatements] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState(0);


if(props.userRole==='ADMIN'){
    return(
        <div className='container'>
            <div className='logo-container'>
                <div className='logo-sg-container'>
                    <img src={logoSG} alt="Société Générale" />
                </div>
                <div className='logo-nac-container'>
                    <img src={logoNac} alt="NAC" />
                </div>
            </div>
        </div>
    )
}else{
    return(
        <div className='container'>
            <div className='logo-container'>
                <div className='logo-sg-container'>
                    <img src={logoSG} alt="Société Générale" />
                </div>
                <div className='logo-nac-container'>
                    <img src={logoNac} alt="NAC" />
                </div>
            </div>
            <div className='status-button-container'>
                <div>
                    {props.userInfo &&
                        <CheckNewFiles 
                            newStatements={newStatements}
                            setNewStatements={setNewStatements}
                        />
                    }
                </div>
                <div>
                    {props.userInfo && 
                        <UploadNewStatements 
                            uploadedFiles={uploadedFiles}
                            setUploadedFiles={setUploadedFiles}
                        />
                    }
                </div>
            </div>
        </div>
    )
}


}

export default Body;