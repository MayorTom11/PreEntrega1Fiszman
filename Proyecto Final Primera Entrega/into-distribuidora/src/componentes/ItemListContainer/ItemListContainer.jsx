import "./ItemListContainer.scss"
import Fernet from "../../assets/FernetBranca750ml.png"
import Campari from "../../assets/CampariMilano750ml.png"
import Skyy from "../../assets/Skyy750ml.png"
import Gancia from "../../assets/Gancia750ml.png"

export const ItemListContainer = ({saludo}) => {
    return (
        <div className="list__container aperitivos">
            <h2>{saludo} Aperitivos</h2>
            <hr />
            <div className="contenedor__productos aperitivos">
                <div className="contenedor__producto">
                    <img src={Fernet} alt="Fernet" className="producto"/>
                    <p className="nombre__producto">Fernet 750ml</p>
                </div>
                <div className="contenedor__producto">
                    <img src={Skyy} alt="Skyy" className="producto"/>
                    <p className="nombre__producto">Skyy 750ml</p>
                </div>
                <div className="contenedor__producto">
                    <img src={Campari} alt="Campari" className="producto"/>
                    <p className="nombre__producto">Campari 750ml</p>
                </div>
                <div className="contenedor__producto">
                    <img src={Gancia} alt="Gancia" className="producto"/>
                    <p className="nombre__producto">Gancia 750ml</p>
                </div>
            </div>
        </div>
    )
}