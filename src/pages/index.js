import React, { useEffect, useState } from 'react'
import Bootsrapcaro from './Bootsrapcaro'
import './Home.css'

import Searchsec from './Searchsec';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
function Home() {
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
    <Bootsrapcaro/>
    <center>
        <div class="jumbotron container" style={{marginTop:"30px"}}>
     <div class="row">
		<div class="col-2">
	<a onClick={()=>filterResult("men's clothing")}><img  src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11275832/2022/4/6/0fedd175-efa2-4346-a6dd-a592b4790f2f1649234504796-High-Star-Men-Black-Solid-Denim-Jacket-3971649234504005-1.jpg" class="imgitm1 rounded-circle"></img></a>
			<p class="imgtxt">Men</p>
		</div>
		<div class="col-2">
		<a onClick={()=>filterResult("women's clothing")}><img src="https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg" class="imgitm1 rounded-circle"></img></a>	
			<p class="imgtxt">Women</p>
		</div>
		<div class="col-2">
		<a onClick={()=>filterResult("men's clothing")}>	<img src="https://assets.ajio.com/medias/sys_master/root/20230619/Jr1C/64906e04d55b7d0c63756139/-473Wx593H-460476509-teal-MODEL.jpg" class="imgitm1 rounded-circle"></img></a>	
			<p class="imgtxt">Casual's<br></br> mens</p>
		</div>
		<div class="col-2">
		<a onClick={()=>filterResult("electronics")}>	<img src="https://thetechhacker.com/wp-content/uploads/2021/11/Are-electronic-Gadgets-Good-for-us-Or-are-they-Bad.jpg" class="imgitm1 rounded-circle"></img></a>	
			<p class="imgtxt">Electronics</p>
		</div>
		<div class="col-2">
		<a onClick={()=>filterResult('jewelery')}>	<img src="https://blingvine.com/cdn/shop/products/claire-minimal-pearl-necklace-set-necklace-sets-blingvine-636748_750x.jpg?v=1636529948" class="imgitm1 rounded-circle"></img></a>	
			<p class="imgtxt">Jewelery</p>
		</div>
        <div class="col-2">
        <a onClick={()=>filterResult("women's clothing")}><img src="https://static.fibre2fashion.com//articleresources/images/87/8609/fashion%20women-small_Small.jpg" class="imgitm1 rounded-circle"></img></a>	
			<p class="imgtxt">women <br></br> casuals</p>
		</div>
      

	</div>
 </div>

 </center>
    {/* <Searchsec/> */}
    <section style={{marginTop:"60px"}}>
    <div class="filter"> <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
</div>
<div id="mobile-filter" style={{marginLeft:"20px"}}>
<p class="pl-sm-0 pl-2"> Home </p>
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
<section id="sidebar">
<p> Home </p>
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
<div class="container">
<div class="d-flex flex-row">
<div class="text-muted m-2" id="res">Showing 20 results</div>

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
  <a href="#" class="active">1</a>
  <a href="/One" >2</a>
  <a href="/one">3</a>
  <a href="/One">4</a>
  <a href="/One">5</a>
  <a href="/One">6</a>
  <a href="#">&raquo;</a>
</div>
</center>
</section>

</section> 

</section>



    </>
  )
}

export default Home