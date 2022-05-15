import React from 'react'
import './Products.css'
function Products({
    Image,Name,Price
}
   
) {


  return (
    
        
      <div>
          <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="card mb-30 mr-30">
                <a class="card-img-tiles" href="#" data-abc="true">
                <div>
                  <div class="main-img"><img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category"/></div>
                </div>
                </a>
              <div class="card-body text-center">
                <h4 class="card-title">Laptops</h4>
                <p class="text-muted">Starting from $499</p><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Products