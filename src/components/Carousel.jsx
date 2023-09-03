import axios from "axios";
import React, { useState, useLayoutEffect } from 'react';
import Card from './Card';

const Carousel = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get("https://gradistore-spi.herokuapp.com/products/all");
        if(response.data.products !== undefined) {
            setProducts(response.data.products.nodes);
        }
        setLoading(false);
    }

    useLayoutEffect(() => {
        if(loading){
            fetchProducts();
        }
    });

    return (
        <div className="carouselContainer">
            {products.length > 0 && products.map((product) => {
                    return <Card key={product.id} product={product}/>;
                })
            }
        </div>
    )
}

export default Carousel