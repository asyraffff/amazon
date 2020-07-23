import React from 'react'
import '../styles/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        // remove item from basket...
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    };

    return (
        <div className="checkoutProduct">
            <img className="checkouProduct__image" src={image} alt="product" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {   // create an array of 5(rating) and fill it with ⭐
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                    {/* try to use react rating star npm in future */}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
