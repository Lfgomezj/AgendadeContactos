import Datos from "../assets/Contactos.json"
import imagen from "../assets/img_avatar.jpg"


const datos2 = Datos.contactos2
console.log(datos2)
const Card2 = () => {
	return (
		<div className="card2">


			{
				datos2.map((dato2) => (
					<section className="container">
						<img className="imagen" src={imagen}></img>

						<section className="dato2">
							<p><b>Nombre</b></p>
							<p><b>Telefono</b></p>
							<p><b>Email</b></p>
							<p><b>Direccion</b></p>
							<p><b>Ciudad</b></p>
							<p><b>País</b></p>

						</section >
						<section className="datos">
							<p><b>{dato2.nombre}</b></p>
							<p>{dato2.telefono}</p>
							<p>{dato2.email}</p>
							<p>{dato2.direccion}</p>
							<p>{dato2.ciudad}</p>
							<p>{dato2.pais}</p>

						</section >
					</section >




				))

			}




		</div >

	);
};




export default Card2