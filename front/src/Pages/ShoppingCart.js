import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  return (
    <div id="maincontent" className="maincontent cart">
      <div className="container-fluid">
        <div className="section-bg-w-br-30">
          <div id="shopping_cart_dynamic_content" className="mainwrap shopping_cart_dynamic_content mt-3 mb-5">
            <div className="headingtitle">
              <h1>Shopping Cart</h1>
            </div>

            <div className="box text"></div>

            <div className="content cart">
              <div className="products">
                <form
                  name="cart_quantity"
                  id="cart_quantity"
                  action="https://www.fos-lighting.eu/shopping_cart.php?action=update_product"
                  method="post"
                >
                  <div className="shoppingCart">
                    <div className="productCart titles-row">
                      <div className="productItemCart title">
                        <div className="productRemoveCart">Delete</div>
                        <div className="centerit productImageCart"></div>
                        <div className="productTitleCart">Product(s)</div>
                        <div className="productQuantityCart">Quantity</div>
                        <div className="productPriceCart">Total</div>
                      </div>
                    </div>

                    <div className="productCart">
                      <div>
                        <div className="productItemCart">
                          <div className="productRemoveCart">
                            <div className="delete action">
                              <input
                                type="checkbox"
                                name="cart_delete[]"
                                value="1020"
                                className="cart_delete_product_value cart_close_value"
                              />
                            </div>
                            <div className="delete text cart_close">
                              <i className="las la-trash-alt cart_delete_product"></i>
                            </div>
                          </div>
                          <div className="centerit productImageCart">
                            <a href="https://www.fos-lighting.eu/iwm-200-p-1020.html">
                              <img
                                src="uploads/thumbnails/products_0_image_1020.jpg.thumb_96x64.jpg"
                                border="0"
                                title="IWM-200"
                                alt=" IWM-200 "
                              />
                            </a>
                          </div>
                          <div className="productTitleCart">
                            <a href="https://www.fos-lighting.eu/iwm-200-p-1020.html" className="productNameCart">
                              <b>IWM-200</b>
                            </a>
                            <span className="productModelCart">Model: L005774</span>
                          </div>
                          <div className="productQuantityCart">
                            <i className="las la-minus update-cart-quantity decrease-cart-quantity" id="decrease-cart-quantity"></i>
                            <input
                              type="text"
                              name="cart_quantity[]"
                              id="cart_quantity[]"
                              value="1"
                              style={{ width: '40px', textAlign: 'center' }}
                              className="selectform cart_quantity_action cart_quantity_value"
                            />
                            <input type="hidden" name="products_id[]" value="1020" />
                            <input type="hidden" name="multiples_conversion" id="multiples_conversion_value" />
                            <i className="las la-plus update-cart-quantity increase-cart-quantity" id="increase-cart-quantity"></i>
                          </div>
                          <div className="productPriceCart">
                            <b>172.50€</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shoppingCartDescription">
                    <div className="title">Total</div>
                    <div className="box total">
                      <div className="inner">
                        <div className="description total total_amount">
                          <span id="cart-text">Total:</span>
                          <span id="cart-value">172.50€</span>
                          <div className="clear"></div>
                        </div>
                        <div className="description prices-not-include-vat">Prices do not include VAT</div>
                      </div>

                      <div className="description buttons">
                        <Link to='/complete-order'>
                          <div className="shop-btn has-icon right">
                            <span>Checkout</span>
                            <i className="las la-arrow-right"></i>
                          </div>
                        </Link>
                      </div>

                      <div className="description buttons">
                        <a href="https://www.fos-lighting.eu">
                          <input
                            type="button"
                            border="0"
                            alt="Continue Shopping"
                            value="Continue Shopping"
                            title="Continue Shopping"
                            className="continue-shop"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
