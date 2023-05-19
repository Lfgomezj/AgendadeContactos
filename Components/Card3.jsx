import Datos from "../assets/Contactos.json"
import imagen from "../assets/img_avatar.jpg"


const datos3 = Datos.contactos3

const Card3 = () => {
	return (
		<div className="card3">
			<h1>Contactos Frecuentes</h1>

			{
				datos3.map((dato) => (
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
							<p><b>{dato.nombre}</b></p>
							<p>{dato.telefono}</p>
							<p>{dato.email}</p>
							<p>{dato.direccion}</p>
							<p>{dato.ciudad}</p>
							<p>{dato.pais}</p>

						</section >
					</section >




				))

			}




		</div >

	);
};




export default Card3