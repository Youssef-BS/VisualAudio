import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
          id: 1020,
          name: 'IWM-200',
          price: 172.50,
          quantity: 1,
          imageUrl: 'uploads/thumbnails/products_0_image_1020.jpg.thumb_90x60.jpg',
          productUrl: 'https://www.fos-lighting.eu/iwm-200-p-1020.html',
        },
        // Add more items as needed
      ]);
    
      const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      };
    
      const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };
    
      const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      };
    return (
       
      
                <div id="shopping-cart-items-container" className="container dynamic_content active">
                     {cartItems.length === 0 ? (

                    <div id="shopping-cart-items-wrapper">
                        <div className="centerit empty">
                            Your cart is empty.
                        </div>
                    </div>
                     ) : (
                        <div id="shopping-cart-items-wrapper">
          <div className="panel" id="mini-cart-panel">
            <div className="items">
              {cartItems.map((item) => (
                <div className="item" key={item.id}>
                  <div className="image">
                    <a href={item.productUrl}>
                      <img src={item.imageUrl} className="mouseOver" alt={item.name} />
                    </a>
                  </div>
                  <div className="description">
                    <div className="title">
                      <a href={item.productUrl}>
                        <span className="name">{item.name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="price_container">
                    <div className="price">
                      <span>Price:</span>{item.price}€
                    </div>
                    <div className="actionbar">
                      <span>
                        <i
                          className="las la-minus update-minicart-quantity decrease-minicart-quantity"
                          onClick={() => decreaseQuantity(item.id)}
                        ></i>
                      </span>
                      <span>
                        <input
                          type="text"
                          name="minicart_quantity[]"
                          value={item.quantity}
                          className="selectform minicart_quantity_action"
                          readOnly
                        />
                        <input type="hidden" name="minicart_products_id[]" value={item.id} />
                        <input type="hidden" name="multiples_conversion" value="1" />
                      </span>
                      <span>
                        <i
                          className="las la-plus update-minicart-quantity increase-minicart-quantity"
                          onClick={() => increaseQuantity(item.id)}
                        ></i>
                      </span>
                      <span className="productRemoveMiniCart">
                        <div className="delete action">
                          <input
                            type="checkbox"
                            name="minicart_delete[]"
                            value={item.id}
                            className="minicart_delete_product_value minicart_close_value"
                          />
                        </div>
                        <div className="delete text minicart_close">
                          <i
                            className="las la-trash-alt minicart_delete_product"
                            onClick={() => removeItem(item.id)}
                          ></i>
                        </div>
                      </span>
                    </div>
                    <div className="clear"></div>
                  </div>
                  <div className="clear"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="total total_amount">
            <span>Total:</span>{calculateTotal()}€
          </div>
          <div className="goto">
            <Link to="/shopcart">
              <button type="button" className="shop-btn outline">
               <span>Shopping cart</span>
              </button>
            </Link>
            <Link className="shop-btn has-icon right" to='/complete-order' id="gotocheckout">
              Checkout<i className="las la-arrow-right"></i>
            </Link>
          </div>
        </div>
      )}
    </div>
               
 
    )
}

export default Cart;
