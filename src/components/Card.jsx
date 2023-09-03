import React from 'react'

const Card = ({product}) => {
    return (
        <div className='card' key={product.id}>
            <div className='imgCard' style={{backgroundImage: `url('${product.featuredImage.url}')`}}>
                <div className='discountCard'>20%</div>
                <button className='buttonCard'>ADD TO CARD</button>
            </div>
            <div className='footerCard'>
                <div className='grid-6'>
                    <div className='nameCard'>{product.title}</div>
                    <div className='rankingCard'>({product.totalInventory})</div>
                </div>
                <div className='grid-6'>
                    <div className='priceCard'>€ {product.prices.min.amount}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Card