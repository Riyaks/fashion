import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <a href={`/product/${id}`}>

          <div class="row">
  
  
<div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1" style={{marginBottom:"70px"}}>
<div class="card"><center> <img class="card-img-top"  src={image}/></center>
<div class="card-body">
<h5>{title}</h5>
<div class="d-flex flex-row my-2">
<div class="text-muted">${price}</div>
<div class="ml-auto"> <button class="border rounded bg-white sign"><span class="fa fa-plus" id="orange"></span></button> <span class="px-sm-1">1 loaf</span> <button class="border rounded bg-white sign"><span class="fa fa-minus" id="orange"></span></button> </div>
</div> <button class="btn w-100 rounded my-2">Add to cart</button>

</div>
</div>

</div>

  

</div>
        </a>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;