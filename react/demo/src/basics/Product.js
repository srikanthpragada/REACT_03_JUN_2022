
import PropTypes from 'prop-types';

export default function Product(props) {
    var discountedPrice = props.price - (props.price * props.discountRate) / 100
    return (
        <>
            <h2>Name : {props.name}</h2>
            <h3>Price : {props.price}</h3>
            <h3>Discounted Price : {discountedPrice}</h3>
        </>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    discountRate : PropTypes.number
};
 