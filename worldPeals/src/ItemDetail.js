import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const ItemDetail = () => {

const { id } = useParams();
const {data: shop, isPending, error} = useFetch('http://localhost:8000/shops/' + id);

const [ispending, setispending] = useState(false);


const handleClick = () => {

    const basketDetails = {
        name: document.querySelector('.details-log h3').textContent,
        price: document.querySelector('.details-log h4:nth-of-type(1)').textContent,
        shipping: document.querySelector('.details-log h4:nth-of-type(2)').textContent,
        image: document.querySelector('.details-log img').getAttribute('src')
    };
    setispending(true);

    fetch('http://localhost:8050/market',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(basketDetails)
    })
    .then( () => {
        console.log('successfully added to blog');
        setispending(false);
    });
}

    return ( 
        <div className="item-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div> }
            {shop && 
                <div className="details-log">
                    <div className="details-img">
                        <img  src={shop.image} alt={shop.name} />
                    </div>
                    <div className="details-text">
                        <h3> {shop.name} </h3>
                        <h4 className="h4-style"> {shop.price} </h4>
                        <h4> Shipping price: {shop.shipping} </h4>
                        {!ispending && <button onClick={handleClick}>add to basket</button>}
                        {ispending && <button onClick={handleClick} disabled>add to basket</button>}
                    </div>
                </div>
            }
        </div>
     );
}
 
 
export default ItemDetail;