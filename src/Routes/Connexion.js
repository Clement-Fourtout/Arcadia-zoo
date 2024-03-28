import { Link, Outlet } from 'react-router-dom'

export default function Connexion(){
	return(
	<>
		<div style={{backgroundColor : 'azure', display : 'flex', justifyContent :    'space-evenly'}}>
			 <h1>Page d'accueil</h1>
			 <Link to={'contact'}> Mes contacts </Link>
    </div>
    <div style={{backgroundColor : 'coral'}}>
	     <Outlet/>
    </div>
   </>
  )
};