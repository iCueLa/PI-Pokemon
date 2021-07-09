import j from "./Card.module.css";
import { Link } from 'react-router-dom';


const Card = ({name, id, img , type}) => {
    console.log()
    const redHeart = "💖"
    return (
        <div className={j.pokemonCard} key={id}>
            <div className={j.pokemonImgConteiner}>
                <img className={j.pokemonImg} src={img} alt={name} />
            </div>
            <div className={j.cardBody}>
                <div className={j.cardTop}>
                    {<Link to={`/Home/data/${id} `}><a>{name}</a></Link>}
                </div>
                <div className={j.typeTitle}>
                        type:
                </div>
                <div className={j.pokemonType}>{type.map((e) => {
                        return <div className={j.pokemonTypeText} key={e.id}>{e.name} </div>
                    })
                    }
                </div>
                <div className={j.cardButton}>
                    <button>
                        <div className={j.pokemonFav}>{redHeart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Card