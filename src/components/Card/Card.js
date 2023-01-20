import "./Card.css"
import { getClassNames, getDescriptionByState } from "./helpers"

const Card = ({ prod, onClick, isSelected }) => {
    const onSelect = () => {
        if (prod.disabled) {
            return
        }

        onClick()
    }

    const getTagClassnames = defaultClass => {
        return getClassNames(defaultClass, isSelected, prod.disabled)
    }
    return (
        <>
        <div className="cardWrapper" >
            <div className={getTagClassnames('cardBody')} onClick={onSelect}>
            <div className="sup-titles">{prod.suptitle}</div>
                <h2 className="cardTitle">{prod.title}</h2>
                <h3 className="sub-titles">{prod.subtitle}</h3>
                <p className="text">{prod.text}</p>
                <div className={getTagClassnames('weight')}>
                    <div>{prod.weight}</div>
                    <div className="unit">{prod.unit}</div>
                </div>
                <div className="description">{getDescriptionByState(prod, isSelected, onSelect)}</div>
            </div>
            {prod.disabled && <div className="disabledCadrdWrapper"/>}
        </div>
        </>
    )

}

export default Card;