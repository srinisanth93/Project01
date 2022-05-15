import {
	BrowserRouter,
	Routes,
	Route,
  Link
} from 'react-router-dom';
import MyCart from './mycart/MyCart';
import Orders from './orders/Orders';
import Products from './products/Products';
import User from './User/User';
import About from './about/About';
import './App.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from "@material-ui/core/Avatar";
import AllProducts from './products/AllProducts';
function App() {
  return ( 
    <div>

        <BrowserRouter>               
               <nav className="navbar navbar-expand-sm" id="navbar">
             <div className="container-fluid">	
            <div className="navbar-brand" id="header1" >
                <img src={"https://www.whoa.in/download/lord-ayyappa-hd-images-wallpaper-lord-ayyappa-god-5-lord-ayyappa"} className={"header_logo"} alt={"image_2"}/>  Sree Ayyappa Automobiles
            </div>
            <ul className="navbar-nav" id="menubar">
            <Link to={'/AllProducts'}> <li className="main-nav__item"><a className="nav-link" id="navitems" href="!#" style={{color:"white"}}>Products</a></li></Link>
             
              <Link to={'/about'}><li className="main-nav__item"><a className="nav-link" id="navitems" href="!#" style={{color:"white"}}>Contact us</a></li></Link>
              <Link to={'/my-cart'}><li className="main-nav__item"><a className="nav-link" id="navitems" href="!#" style={{color:"white"}}><ShoppingCartIcon className='shoppingcart' data-toggle="tooltip" data-placement="bottom" title="my cart"></ShoppingCartIcon></a></li></Link>
			        <Link to={'/user'}><li className="main-nav__item"><a className="nav-link" id="navitems" href="!#" style={{color:"white"}}> <Avatar className='avatar' data-toggle="tooltip" data-placement="bottom" title="Users"></Avatar></a> </li></Link>
            </ul>
       </div>
    </nav> 
        


  
   <Routes>
       <Route index element={<Products/>} />
       <Route path={"/about"} element={<About></About>}></Route>
       <Route path={"/my-cart"} element={<MyCart/>}></Route> 
       <Route path={"/users"} element={<User></User>}></Route> 
       <Route path={"/orders"} element={<Orders/>}></Route> 
       <Route path={"/AllProducts"} element={<AllProducts/>}></Route> 
   </Routes>
   </BrowserRouter>
       
      
         
       
        
   </div>
 // </nav>
 // </div>
  );
}

export default App;
