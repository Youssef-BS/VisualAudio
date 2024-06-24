import React, { useState } from 'react';

const OrderList = () => {
  const [orderList, setOrderList] = useState([
    {
      id: 1020,
      name: 'IWM-200',
      price: 172.50,
      quantity: 1,
      imageUrl: 'uploads/thumbnails/products_0_image_1020.jpg.thumb_96x64.jpg',
      productUrl: 'https://www.fos-lighting.eu/iwm-200-p-1020.html',
      model: 'L005774'
    },
    // Add more items as needed
  ]);

  const increaseQuantity = (id) => {
    setOrderList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setOrderList((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setOrderList((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return orderList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div id="mainbody" className="mainbody">
      <div className="breadcrumb" id="breadcrumb_static">
        <div className="mainwrap container-fluid">
          <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/wishlist.php" className="headerNavigation">Order List</a>
        </div>
      </div>
      <div id="maincontent" className="maincontent">
        <div className="container-fluid">
          <div className="section-bg-w-br-30">
            <div className="wishlist-wrapper">
              <div id="wishlist_dynamic_content" className="mainwrap wishlist_dynamic_content mt-3 mb-5">
                <div className="headingtitle">
                  <h1>Order List</h1>
                </div>
                {orderList.length === 0 ? (
                  <div className="empty-order-list-message">
                    Your order list is empty.
                  </div>
                ) : (
                  <div className="content cart">
                    <div className="products">
                      <form name="wishlist_form" id="wishlist_form" action="https://www.fos-lighting.eu/wishlist.php" method="post">
                        <div className="refresh update-wishlist"></div>
                        <div className="shoppingCart">
                          <div className="productCart titles-row">
                            <div className="productItemCart title">
                              <div className="productRemoveCart">Delete</div>
                              <div className="centerit productImageCart"></div>
                              <div className="productTitleCart">Product(s)</div>
                              <div className="productQuantityCart">Quantity</div>
                              <div className="productPriceCart">Total</div>
                              <div className="productAddToCartTableTitle"></div>
                            </div>
                          </div>
                          {orderList.map((item) => (
                            <div className="productCart" key={item.id}>
                              <div>
                                <div className="productItemCart productWishlistCart">
                                  <input
                                    type="checkbox"
                                    name="add_wishprod[]"
                                    value={item.id}
                                    id={`add_wishprod_${item.id}`}
                                    style={{ display: 'none' }}
                                    className="css-checkbox add_wishprod"
                                  />
                                  <div className="productRemoveCart update-wishlist wishlist-delete" data-product-id={item.id}>
                                    <div className="delete action">
                                      <input
                                        type="checkbox"
                                        name="cart_delete[]"
                                        value={item.id}
                                        className="cart_delete_product_value cart_close_value"
                                      />
                                    </div>
                                    <div className="delete text cart_close">
                                      <i className="las la-trash-alt cart_delete_product" onClick={() => removeItem(item.id)}></i>
                                    </div>
                                  </div>
                                  <div className="centerit productImageCart">
                                    <a href={item.productUrl}>
                                      <img src={item.imageUrl} alt={item.name} title={item.name} />
                                    </a>
                                  </div>
                                  <div className="productTitleCart">
                                    <a href={item.productUrl} className="productNameCart">
                                      <b>
                                        {item.name}
                                        <span className="in-cart">
                                          <div className="product-box__ordered">
                                            <div className="product-box__inner">
                                              <i className="las la-shopping-bag"></i>
                                              <span>Item in Cart</span>
                                            </div>
                                          </div>
                                        </span>
                                      </b>
                                    </a>
                                    <span className="productModelCart">Model: {item.model}</span>
                                  </div>
                                  <div className="productQuantityCart actionbar">
                                    <i
                                      className="las la-minus update-wishlist update-wishlist-quantity decrease-wishlist-quantity"
                                      id="decrease-wishlist-quantity"
                                      data-product-id={item.id}
                                      onClick={() => decreaseQuantity(item.id)}
                                    ></i>
                                    <input
                                      type="text"
                                      name="wishlist_quantity[]"
                                      id="wishlist_quantity[]"
                                      value={item.quantity}
                                      style={{ width: '40px', textAlign: 'center' }}
                                      className="selectform wishlist_quantity_action wishlist_quantity_value"
                                      readOnly
                                    />
                                    <input type="hidden" name="products_id[]" value={item.id} />
                                    <input type="hidden" name="multiples_conversion" value="1" id="multiples_conversion_value" />
                                    <i
                                      className="las la-plus update-wishlist update-wishlist-quantity increase-wishlist-quantity"
                                      id="increase-wishlist-quantity"
                                      data-product-id={item.id}
                                      onClick={() => increaseQuantity(item.id)}
                                    ></i>
                                  </div>
                                  <div className="productPriceCart">
                                    <b>{item.price.toFixed(2)}€</b>
                                  </div>
                                  <div className="add-to-cart-wishlist update-shopping-cart" data-product-id={item.id}>
                                    <div className="btn wish-add-to-cart">
                                      <i className="las la-shopping-cart" title="Add to Cart"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="container d-lg-none d-block mobile-add-all">
                          <div className="row">
                            <div className="col text-center mt-4 mb-1">
                              <div className="btn shop-btn has-icon right add-all-to-cart-wishlist update-shopping-cart">
                                Add all to cart <i className="las la-cart-arrow-down"></i>
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
                                <span id="cart-value">{calculateTotal()}€</span>
                                <div className="clear"></div>
                              </div>
                              <div className="description prices-not-include-vat">
                                Prices do not include VAT
                              </div>
                            </div>
                            <div className="description buttons">
                              <a href="https://www.fos-lighting.eu/create_order_list_pdf.php?download_order_list=true">
                                <div className="shop-btn has-icon right">
                                  <span>ORDER LIST</span>
                                  <i className="las la-file-download"></i>
                                </div>
                              </a>
                            </div>
                            <div className="description buttons">
                              <a href="https://www.fos-lighting.eu/create_order_brochure_pdf.php?download_brochure_list=true">
                                <div className="shop-btn has-icon right">
                                  <span>ORDER BROCHURE</span>
                                  <i className="las la-file-download"></i>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="container d-lg-block d-none">
                <div className="row">
                  <div className="col text-center mt-4 mb-5">
                    <div className="btn shop-btn has-icon right add-all-to-cart-wishlist update-shopping-cart">
                      Add all to cart <i className="las la-cart-arrow-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
