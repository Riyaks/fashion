import React, { useEffect, useState } from 'react'
import Bootsrapcaro from './Bootsrapcaro'
import './Home.css'
import { FaFilter, FaMinus, FaPlus, FaStar } from 'react-icons/fa';
function One() {
  const [posts,setPosts] = useState([])
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(posts=>setPosts(posts))
  },[])
  const filterResult=(catItem=>{
    const result=posts.filter((curPosts)=>{
      return curPosts.category===catItem;
    });
    setPosts(result)
  })
  return (
    <>
    {/* <Searchsec/> */}
    <section >
    <div class="filter"> <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter" >Filters<span class="fa fa-filter pl-1"></span></button>
</div>
<div id="mobile-filter" style={{marginLeft:"20px"}}>
<p class="pl-sm-0 pl-2"> Home</p>
<div class="border-bottom pb-2 ml-2">
<h4 id="burgundy">Filters</h4>
</div>
<div class="py-2 border-bottom ml-3 ">
<h6 class="font-weight-bold " style={{marginTop:"10px",marginBottom:"10px"}}>Categories</h6>
<div id="orange"><span class="fa fa-minus"></span></div>
<form>
<div class="form-group"> <input type="checkbox" id="jewelery" onClick={()=>filterResult('jewelery')}/> <label for="jewelery"></label> Jewelery</div>
<div class="form-group"> <input type="checkbox" id="men's clothing" onClick={()=>filterResult("men's clothing")}/> <label for="men's clothing">Men's clothing</label> </div>
<div class="form-group"> <input type="checkbox" id="women's clothing" onClick={()=>filterResult("women's clothing")}/> <label for="Women's clothing">women's clothing</label> </div>
</form>
</div>
<div class="py-2 border-bottom ml-3" >
<h6 class="font-weight-bold" style={{marginTop:"10px",marginBottom:"10px"}}>Accompainments</h6>
<div id="orange"><span class="fa fa-minus"></span></div>
<form>
<div class="form-group"> <input type="checkbox" id="electronics" onClick={()=>filterResult("electronics")}/> <label for="electronics">Electronics</label> </div>
<div class="form-group"> <input type="checkbox"  id="men's clothing" onClick={()=>filterResult("men's clothing")}/> <label for="men's clothing">Men casual wear</label> </div>
<div class="form-group"> <input type="checkbox" onClick={()=>filterResult("women's clothing")}/> <label for="Women's clothing">women's casual wear</label> </div>
<div class="form-group"> <input type="checkbox" id="All" onClick={()=>setPosts(posts)}/> <label for="All">All</label></div>
</form>
</div>
<div class="py-2 ml-3">
<h6 class="font-weight-bold" style={{marginTop:"10px",marginBottom:"10px"}}>Top Offers</h6>
<div id="orange"><span class="fa fa-minus"></span></div>
<form>
<div class="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
<div class="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on artisan breads</label> </div>
</form>
</div>
</div>
<section id="sidebar" style={{marginTop:"50px"}}>
<p > Home </p>
<div class="border-bottom pb-2 ml-2">
<h4 id="burgundy">Filters</h4>
</div>
<div class="py-2 border-bottom ml-3">
<h6 class="font-weight-bold" style={{marginTop:"10px",marginBottom:"10px"}}>Categories</h6>
<div id="orange"><span class="fa fa-minus"></span></div>
<form>
<div class="form-group"> <input type="checkbox" id="jewelery" onClick={()=>filterResult('jewelery')}/> <label for="jewelery"></label> Jewelery</div>
<div class="form-group"> <input type="checkbox" id="men's clothing" onClick={()=>filterResult("men's clothing")}/> <label for="men's clothing">Men's clothing</label> </div>
<div class="form-group"> <input type="checkbox" id="women's clothing" onClick={()=>filterResult("women's clothing")}/> <label for="Women's clothing">women's clothing</label> </div>
</form>
</div>
<div class="py-2 border-bottom ml-3">
<h6 class="font-weight-bold" style={{marginTop:"10px",marginBottom:"10px"}}>Accompainments</h6>
<div id="orange"><span class="fa fa-minus"></span></div>
<form>
<div class="form-group"> <input type="checkbox" id="electronics" onClick={()=>filterResult("electronics")}/> <label for="electronics">Electronics</label> </div>
<div class="form-group"> <input type="checkbox"  id="men's clothing" onClick={()=>filterResult("men's clothing")}/> <label for="men's clothing">Men casual wear</label> </div>
<div class="form-group"> <input type="checkbox" onClick={()=>filterResult("women's clothing")}/> <label for="Women's clothing">women's casual wear</label> </div>
<div class="form-group"> <input type="checkbox" id="All" onClick={()=>setPosts(posts)}/> <label for="All">All</label></div>
</form>
</div>
<div class="py-2 ml-3">
<h6 class="font-weight-bold" style={{marginTop:"10px",marginBottom:"10px"}}>Top Offers</h6>
<div id="orange"><span class="fa fa-minus"></span></div>
<form>
<div class="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label></div>
<div class="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off </label></div>
</form>
</div>
</section>

<section id="products">
<div class="container" style={{marginTop:"50px"}}>
<div class="d-flex flex-row">
<div class="text-muted m-2" id="res" >Showing 20 results</div>

</div>
<div class="row">
  {posts.map((post)=>
  
<div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1" style={{marginBottom:"70px"}}>
<div class="card"><center> <img class="card-img-top"  src={post.image}/></center>
<div class="card-body">
<h5>{post.category}</h5>
<div class="d-flex flex-row my-2">
<div class="text-muted">${post.price}</div>
<div class="ml-auto"> <button class="border rounded bg-white sign" style={{marginLeft:"12px"}}><span class="fa " id="orange"><FaPlus style={{fontSize:"10px"}}/></span></button> <span class="px-sm-1"></span> <button class="border rounded bg-white sign" ><span class="fa " id="orange"><FaMinus style={{fontSize:"10px"}}/></span></button> </div><br></br>
</div><div><FaStar style={{color:"orange",marginRight:"4px"}}/>{post.rating.rate}</div> <button class="btn w-100 rounded my-2">Add to cart</button>

</div>

</div>

</div>

  )}

</div>
</div>
<section>
  <center>
<div class="pagination"  style={{marginTop:"50px"}}>
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
</center>
</section>

</section> 

</section>



    </>
  )
}

export default One