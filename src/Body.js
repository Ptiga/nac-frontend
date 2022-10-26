import logoSG from './logosg.jpg'
import logoNac from './logonac.png'

function Body(){


return(
<div className='container'>
    <div className='logo-sg-container'>
        <img src={logoSG} alt="Société Générale" />
    </div>
    <div className='logo-nac-container'>
        <img src={logoNac} alt="NAC" />
    </div>
</div>
)
}

export default Body;