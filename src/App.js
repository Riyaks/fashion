import React from 'react'
import Navbar from './pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'

import ComponentProducts from './containers/ComponentProducts'
import Listingproduct from './containers/Listingproduct'
import One from './pages/One'
// import DetailsProduct from './containers/Detailsproduct'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/omponeCntProducts' element={<ComponentProducts/>}></Route>
   <Route path='/Listingproduct' element={<Listingproduct/>}></Route>
   <Route path='/One' element={<One/>}></Route>
  {/* <Route path='/product/:id'  element={<DetailsProduct/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
