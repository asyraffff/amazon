import React from 'react'
import '../styles/Product.css';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item  to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {   // create an array of 5(rating) and fill it with ⭐
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="book__image" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
