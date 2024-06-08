import useFetch from './useFetch';
/* import { useParams } from "react-router-dom"; */
/* import DisplayList from './DisplayList'; */
import { useState } from 'react';


//child component1
const DisplayList = ({shops, handleClick}) => {
    return ( 
        <div className="display-list">
            {
                shops.map((shop) => (
                    <div className="display-preview" key= {shop.id}>
                        <div className="shop-image">
                            <img src={shop.image} alt={shop.name} />
                        </div>
                            <div className="shop-details">
                                <h3> {shop.name} </h3>
                                <h4> {shop.price} </h4>
                                <h4 className="h4-style"> {shop.shipping} </h4>
                                <button onClick={() => handleClick(shop.id)}>preview</button>
                            </div>
                    </div>
                ))
            }
        </div> 
    );
};

//child component2
const ItemDetail = ({ id }) => {

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
    
        fetch('http://localhost:8050/basket',{
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
                            <h4>{/*  Shipping price: */} {shop.shipping} </h4>
                            <button onClick={handleClick}>{!ispending ? "add to basket" : "sucessful"}</button>
                        </div>
                    </div>
                }
            </div>
         );
    };


//parent component
const Shops = () => {

    const {data: shops, isPending, error} = useFetch('http://localhost:8000/shops');
    const [DisplayItem, setDisplayItem] = useState(null);

    const handleClick = (id) =>{
        setDisplayItem(id);
    }
    return ( 
        <div className="shops">
            <h2>add fruit to basket</h2>
            { isPending && <div>Loading....</div> }
            { error && <div className="error-msg"> {error} </div> }
            <div className="shop-display">
                <div className="Display-cont"> {shops && < DisplayList shops = {shops} handleClick = {handleClick} /> } </div>
                <div className="Display-dtls"> { DisplayItem  &&  < ItemDetail  id = {DisplayItem} /> } </div>
            </div>
        </div>
     );
}
 
export default Shops;