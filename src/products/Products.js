import React from 'react'
import './Products.css'
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteIcon from '@material-ui/icons/FavoriteIcon';
// import FavoriteIcon from "@material-ui/icons/FavoriteIcon";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Products({
    Image,Name,Price
}
  
) {

  let fav=false; 

  return (
    
        
      <div>
          <div className="row">
              <div className="col-md-4 col-sm-6">
          <div className="card my-3" style={{width: "16rem"}}>
           <p className='d-flex pt-2 pl-2 m-0 float-right '> <FavoriteBorderIcon className='favouriteicon'></FavoriteBorderIcon></p>
          <img src={Image} className="card-img-top" alt={"hello"}/>
          <div className="card-body text-center">
            <h3 className="card-title ">{Name}</h3>
            <p>Starting at Rs {Price}</p>

          </div>
</div>
              </div>
          </div>
    </div>
  )
}

export default Products