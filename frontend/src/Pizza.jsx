import PropTypes from 'prop-types'
export default function Pizza(props) {
    return (
        <li className={props.soldOut ? "pizza sold-out" : "pizza"}>
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.soldOut ? "SOLD OUT" : `Price ${props.price}` }</span>
            </div>
        </li>
    )
}
Pizza.propTypes = {
    name: PropTypes.string,
    ingredients: PropTypes.string,
    price: PropTypes.number,
    photoName: PropTypes.string,
    soldOut: PropTypes.bool
}