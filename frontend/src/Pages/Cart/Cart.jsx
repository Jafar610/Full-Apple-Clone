import React from "react";
import img from "../../assets/img/products/iphone-14-pro-max.jpg";
function Cart() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div>
            <div id="img" className="flex justify-center items-center">
              <img src={img} alt="iPhone 14 Pro Max" />
            </div>
            <div id="phone">
              <h2>iPhone 14 Pro Max</h2>
              <p>128GB, Deep Purple</p>
            </div>
          </div>

          <div>
            <div id="increment" className="flex justify-center items-center">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div id="price">
              <p>$1,099.00</p>
            </div>
          </div>
          
        </div>
        <hr />
        <div id="total">
          <p>Total: $1,099.00</p>
        </div>
        <button>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
