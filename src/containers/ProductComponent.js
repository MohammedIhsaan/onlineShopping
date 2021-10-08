import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {

 
  
  const products = useSelector(state => state.allproducts.products);
  
  console.log('frooooo',products)
 
  
  const productList = products?.map((products)=>{
    const {id,title,price,catagory,image}
=products    
return(
      <div className="four wide column" key={id}>

        <Link to={`/product/${id}`}>
        <div className="ui link cards">
    <div className="card">
    <div class="ui small image">
  <svg width="150" height="150">
    <image href={image} x="0" y="0" width="100%" height="100%"></image>
  </svg>
</div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta price">${price}</div>
        <div className="meta">{catagory}</div>
      </div>
    </div>
  </div>
        </Link>
        
  
      </div>
    )
  })

  return (
    <>{productList}</>
  );
};
export default ProductComponent;
