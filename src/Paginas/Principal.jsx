import Nav from "../Components/nav"
import banner from "../assets/banner.jpg"
import Card from "../Components/Card3"
const Principal = () => {
	return (

		<section>
			<Nav />
			<section className="banner" >
				<img src={banner} height="400"></img>
			</section>
			<section className="columnas">
				<section className="texto">
					<h1>LISTA DE CONTACTOS</h1>
					<section className="texto" id="text1">





						<p> La aplicación de agenda de contactos es ser una herramienta imprescindible para mantener mi vida organizada y mis contactos al alcance de mi mano. Esta app, sin duda alguna, se ha convertido en mi compañero digital de confianza cuando se trata de gestionar mi lista de contactos de manera eficiente.          ​</p>

					</section>
				</section>

				<Card />
			</section>
		</section>





	)
}

export default Principal