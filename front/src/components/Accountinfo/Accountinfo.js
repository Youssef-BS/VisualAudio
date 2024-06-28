import React, { useState,useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const AccountPage = () => {

    const Params = useParams()

  const [showModal, setShowModal] = useState(false);
  const [currentContent, setCurrentContent] = useState(Params.type);
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  }
  const handleOrderDClick = (order) => {
    setSelectedOrder(null);
  }
  useEffect(()=>{
      setCurrentContent(Params.type)
  },[Params.type])
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    if (passwordNew !== passwordConfirmation) {
      alert('New password and confirmation do not match.');
      return;
    }

    // Submit the form data
    const formData = new FormData();
    formData.append('action', 'process');
    formData.append('password_current', passwordCurrent);
    formData.append('password_new', passwordNew);
    formData.append('password_confirmation', passwordConfirmation);

    fetch('https://www.fos-lighting.eu/account_password.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle successful response
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  
  const orders = [
    {
      orderId: 25990,
      orderDate: 'Tuesday 04 June, 2024',
      orderStatus: 'Packed Fos',
      paymentMethod: 'Bank account deposit',
      orderCost: '1,622.40€',
      subTotal: '1,622.40€',
      total: '1,622.40€',
      history: [
        {
          date: '04/06/2024',
          status: 'Received',
          comment: 'Hello. Please send us the proforma invoice to doing you immediately a bank transfer. Thanks.',
          attachment: null,
        },
        {
          date: '05/06/2024',
          status: 'Packed Fos',
          comment: '',
          attachment: {
            url: '/uploads/attachment_25990_2024_06_05_06_55_11.pdf',
          },
        },
      ],
      deliveryAddress: 'WEB EVENT SERVICES, Chaouki RAFRAFI, 7 rue Éric Tabarly, Massy, 91300, France',
      products: [
        {
          quantity: 12,
          name: 'FOS Cyclone RGB II',
          price: '1,622.40€',
        },
      ],
    },
    {
      orderId: 25991,
      orderDate: 'Wednesday 05 June, 2024',
      orderStatus: 'Shipped',
      paymentMethod: 'Credit Card',
      orderCost: '500.00€',
      subTotal: '500.00€',
      total: '500.00€',
      history: [
        {
          date: '05/06/2024',
          status: 'Processed',
          comment: 'Order processed and ready for shipping.',
          attachment: null,
        },
        {
          date: '06/06/2024',
          status: 'Shipped',
          comment: '',
          attachment: {
            url: '/uploads/attachment_25991_2024_06_06_09_00_00.pdf',
          },
        },
      ],
      deliveryAddress: 'John Doe, 123 Main St, Anytown, 12345, USA',
      products: [
        {
          quantity: 1,
          name: 'XYZ Product',
          price: '500.00€',
        },
      ],
    },
  ];


  const OrderDetails = ({ order }) => (
    <div className="content account_history_info account-panel">
      <div className="the-order">
        <div className="left">
          <div className="box heading">
            <div className="box main">
              <div className="title id">Order #{order.orderId}</div>
              <div className="description status">
                Status: <span><b>{order.orderStatus}</b></span>
              </div>
              <div className="description">
                Order Date: <b>{order.orderDate}</b>
              </div>
              <div className="description">
                Payment Method: <b>{order.paymentMethod}</b>
              </div>
              <div className="description total">
                Order Total: <b>{order.orderCost}</b>
              </div>
            </div>
  
            <div className="box history">
              <div className="title">
                <i className="las la-history"></i> Order History
              </div>
              {order.history.map((event, index) => (
                <div className="description status" key={index}>
                  <i>{event.date}</i> <span>{event.status}</span><br />
                  Comment: {event.comment} <br />
                  {event.attachment && (
                    <span id="attachment">
                      Attachment: 
                      <a href={event.attachment.url} target="_blank" className="pdf_download_link">
                        <svg fill="#1C2033" width="52" height="52" version="1.1" id="lni_lni-download" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }} xmlSpace="preserve">
                          <g>
                            <path d="M60,44c-1.2,0-2.3,1-2.3,2.3v8.9c0,0.9-0.7,1.6-1.6,1.6H7.9c-0.9,0-1.6-0.7-1.6-1.6v-8.9C6.3,45,5.2,44,4,44 s-2.3,1-2.3,2.3v8.9c0,3.4,2.7,6.1,6.1,6.1h48.3c3.4,0,6.1-2.7,6.1-6.1v-8.9C62.3,45,61.2,44,60,44z"></path>
                            <path d="M30.4,46.5c0.4,0.4,1,0.6,1.6,0.6s1.1-0.2,1.6-0.6l14.5-14.1c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L34.3,39.6V5 c0-1.2-1-2.3-2.3-2.3c-1.2,0-2.3,1-2.3,2.3v34.6L19.1,29.2c-0.9-0.9-2.3-0.8-3.2,0c-0.9,0.9-0.8,2.3,0,3.2L30.4,46.5z"></path>
                          </g>
                        </svg>
                      </a>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          <div className="addresses">
            <div className="box">
              <div className="title">
                <i className="las la-map-marker"></i> Delivery Address
              </div>
              <div className="description">
                {order.deliveryAddress}
              </div>
            </div>
          </div>
        </div>
  
        <div className="right">
          <div className="box products">
            <table border="0" width="100%" cellSpacing="0" cellPadding="2">
              <tbody>
                <tr>
                  <td colSpan="4" className="title">
                    <b className="custom_size_b">
                      <i className="las la-shopping-cart"></i> Products
                    </b>
                  </td>
                </tr>
                {order.products.map((product, index) => (
                  <tr className="prod-row" key={index}>
                    <td width="20" valign="top" align="right" className="description account_history_info_quantity">
                      {product.quantity}&nbsp;<b>X</b>&nbsp;
                    </td>
                    <td valign="top" className="description account_history_info_products">
                      {product.name}
                    </td>
                    <td align="right" valign="top" className="description"></td>
                    <td align="right" valign="top" className="description prod-price">
                      <b>{product.price}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="order-details">
              <div className="description">
                Sub-Total: <b>{order.subTotal}</b>
              </div>
              <div className="description">
                Total: <b>{order.total}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="submit text-center">
        <button className="shop-btn has-icon auto" onClick={() => handleOrderDClick()}>
          <i className="las la-arrow-left"></i>Back
        </button>
        <a href={`https://www.fos-lighting.eu/order_info_to_pdf.php?order_id=${order.orderId}`} className="shop-btn has-icon print-btn auto" style={{ backgroundColor: '#000', borderColor: '#000' }}>
          <i className="las la-print"></i>Print
        </a>
      </div>
    </div>
  );
  const renderContent = () => {
    switch (currentContent) {
      case 'Account Information':
        return <div className="my-acount-wrap">
        <form
          name="account_edit"
          id="account_edit"
          action="https://www.fos-lighting.eu/account_edit.php"
          method="post"
          noValidate
        >
          <input type="hidden" name="action" value="process" />
          <div className="mainwrap my-account">
            <div className="headingtitle inner">
              <h1>Account Information</h1>
            </div>
            <div className="content edit-account account-panel">
              <div className="box">
                <div className="title first">My Account</div>

                <div className="field">
                  <div className="fieldlabel">First name:</div>
                  <div className="fieldkey">
                    <input type="text" name="firstname" id="firstname" value="Chaouki" />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="field">
                  <div className="fieldlabel">Last name:</div>
                  <div className="fieldkey">
                    <input type="text" name="lastname" id="lastname" value="RAFRAFI" />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="field">
                  <div className="fieldlabel">Email Address:</div>
                  <div className="fieldkey">
                    <input type="text" name="email_address" id="email_address" value="wes.france@yahoo.com" />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="field">
                  <div className="fieldlabel">Telephone:</div>
                  <div className="fieldkey">
                    <input type="text" name="telephone" id="telephone" value="+33606502951" />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="field">
                  <div className="fieldlabel">Website:</div>
                  <div className="fieldkey">
                    <input type="text" name="url" id="url" />
                    <span className="inputRequirement">ENTRY_URL_TEXT</span>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>

              <div className="box company">
                <div className="title">
                  <span>Company Details</span>
                </div>

                <div className="field">
                  <div className="fieldlabel">Company name:</div>
                  <div className="fieldkey">
                    <input type="text" name="company" id="company" value="WEB EVENT SERVICES" />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="field" style={{ marginBottom: '0' }}>
                  <div className="fieldlabel">VAT:</div>
                  <div className="fieldkey">
                    <input type="text" name="vat" id="vat" value="FR92521062331" disabled />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="field" style={{ display: 'none' }}>
                  <div className="fieldlabel">Default Currency</div>
                  <div className="fieldkey">
                    <select name="currency">
                      <option value="USD">US Dollar</option>
                      <option value="EUR" selected>
                        Euro
                      </option>
                    </select>
                    <span className="inputRequirement">ENTRY_DEFAULT_CURRENCY_TEXT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="box submit">
              <div className="field center">
                <div className="fieldkey">
                  <input
                    type="submit"
                    border="0"
                    alt="Save changes"
                    value="Save changes"
                    title="Save changes"
                    className="shop-btn"
                  />
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </form>

        <div className="box delete_account">
          <button id="myBtn" className="shop-btn outline" onClick={handleModalOpen}>
            Delete Account
          </button>

          {showModal && (
            <div id="deleteAccount" className="deleteAccount">
              <div className="modal-content">
                <span className="close-modal" onClick={handleModalClose}>
                  <i className="las la-times"></i>
                </span>
                <div className="modal-header">Delete Account</div>
                <div className="modal-text">After this you will not be able to restore the account!</div>
                <div className="modal-buttons">
                  <form
                    name="delete_account"
                    id="delete_account"
                    action="https://www.fos-lighting.eu/account.php"
                    method="post"
                  >
                    <input type="hidden" name="action" value="delete-process" />
                    <input type="hidden" name="customer_id" value="16445" />
                    <button type="submit" className="modal-button shop-btn danger">
                      Delete
                    </button>
                    <button type="button" className="modal-button shop-btn" onClick={handleModalClose}>
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>;
      case 'Edit Address':
        return <div className="my-account-wrap">
        <div className="mainwrap my-account" id="address_book">
          <div className="headingtitle inner">
            <h1>Edit Address</h1>
          </div>
  
          <div className="description note main">
            <i className="las la-map-marker-alt"></i>
            <span>
              This address is used as the pre-selected shipping and billing address
              for orders placed on this store.<br /><br />
              This address is also used as the base for product and service tax
              calculations.
            </span>
          </div>
  
          <div className="content account-panel">
            <div className="box addresses">
              <div className="title">Address Book Entries</div>
              <div className="addresses">
                <div className="address">
                  <div className="description">
                    <br />
                    <b>Primary Address</b> - WEB EVENT SERVICES, Chaouki RAFRAFI, 7 rue ?ric Tabarly, Massy, 91300, France
                  </div>
                  <div className="description buttons">
                    <a className="edit" href="https://www.fos-lighting.eu/address_book_process.php?edit=19936">Edit</a>
                    <a className="delete" href="https://www.fos-lighting.eu/address_book_process.php?delete=19936">Delete</a>
                  </div>
                </div>
                {/* Uncomment the following block if you need to display "no addresses found" */}
                {/* <div className="address">
                  <div className="description">
                    no addresses found
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="description add-address text-center">
            <a href="https://www.fos-lighting.eu/address_book_process.php">
              <input
                type="button"
                border="0"
                alt="New Address"
                value="New Address"
                title="New Address"
                className="shop-btn"
              />
            </a>
          </div>
        </div>
      </div>;
      case 'Change Password':
        return  <div className="my-account-wrap">
        <form
          name="account_password"
          id="account_password"
          onSubmit={handleSubmit}
          noValidate
        >
          <input type="hidden" name="action" value="process" />
  
          <div className="mainwrap my-account">
            <div className="headingtitle inner">
              <h1>Change Password</h1>
            </div>
  
            <div className="content account_password account-panel">
              <div className="box">
                <div style={{ marginTop: '20px' }}></div>
  
                <div className="field">
                  <div className="fieldlabel req">Current password:</div>
                  <div className="fieldkey">
                    <input
                      type="password"
                      name="password_current"
                      id="password_current"
                      maxLength="40"
                      value={passwordCurrent}
                      onChange={(e) => setPasswordCurrent(e.target.value)}
                    />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>
  
                <div className="field">
                  <div className="fieldlabel req">New password:</div>
                  <div className="fieldkey">
                    <input
                      type="password"
                      name="password_new"
                      id="password_new"
                      maxLength="40"
                      value={passwordNew}
                      onChange={(e) => setPasswordNew(e.target.value)}
                    />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>
  
                <div className="field">
                  <div className="fieldlabel req">Confirm new Password:</div>
                  <div className="fieldkey">
                    <input
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      maxLength="40"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>
  
                <div className="field submit center">
                  <div className="fieldkey">
                    <input
                      type="submit"
                      border="0"
                      alt="Save"
                      value="Save"
                      title="Save"
                      className="shop-btn"
                    />
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>;
      case 'Order History':
        return <div className="my-account-wrap">
        <div className="mainwrap my-account">
          {selectedOrder ? (
            <OrderDetails order={selectedOrder} />
          ) : (
            <>
              <div className="headingtitle inner">
                <h1>My Order History</h1>
              </div>
              <div className="content account_history account-panel">
                <div className="all-orders">
                  {orders.map((order) => (
                    <div className="order-item" key={order.orderId}>
                      <a href="#" onClick={() => handleOrderClick(order)}>
                        <div className="title">Order Number: <b>{order.orderId}</b></div>
                        <div className="description">Order Date: <b>{order.orderDate}</b></div>
                        <div className="description status">Order Status: <b>{order.orderStatus}</b></div>
                        <div className="description">Products: <b>{order.products.map(p => p.name).join(', ')}</b></div>
                        <div className="description price">Order Cost: <b>{order.orderCost}</b></div>
                      </a>
                      <div className="order-details">
                        <a className="icon" href="#" onClick={() => handleOrderClick(order)}>
                          <i className="las la-search"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="clear"></div>
                </div>
      
                <div className="splitbox">
                  <div className="left">Showing <b>1</b> to <b>{orders.length}</b> (from <b>{orders.length}</b> orders)</div>
                  <div className="right">&nbsp;<b>1</b>&nbsp;</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>;
       
      case 'XML Products':
        return <div className="my-account-wrap">
        <div className="mainwrap my-account">
          <div className="headingtitle inner">
            <h1>XML Products</h1>
          </div>
          <div className="content account_history account-panel container">
            <div className="row">
              <div className="col-12 mb-5 mt-5">
                <p>
                  You can use the following url to import / update your eshop products: <br />
                  <b>https://www.fos-lighting.eu/products_xml.php?code=10f10c449878c6f1137e87c1fca3ad4f</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
      default:
        return <div>Select an option to view content.</div>;
    }
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

 

  

  return (
    <div className="container-fluid account-inner-pages">
      <div className="account menu home">
        <div className="headingtitle account-menu">
          <h1>My account</h1>
        </div>

        <div className="box">
          <div className={`item ${currentContent === 'Account Information' ? 'current' : ''}`}>
            <a href="#!"onClick={() => setCurrentContent('Account Information')}>
              <i className="las la-user"></i>
              <span>Account Information</span>
            </a>
          </div>

          <div className={`item ${currentContent === 'Edit Address' ? 'current' : ''}`}>
            <a href="#!"onClick={() => setCurrentContent('Edit Address')}>
              <i className="las la-address-book"></i>
              <span>Edit Address</span>
            </a>
          </div>

          <div className={`item ${currentContent === 'Change Password' ? 'current' : ''}`}>
            <a href="#!"onClick={() => setCurrentContent('Change Password')}>
              <i className="las la-key"></i>
              <span>Change Password</span>
            </a>
          </div>

          <div className={`item ${currentContent === 'Order History' ? 'current' : ''}`}>
            <a href="#!"onClick={() => setCurrentContent('Order History')}>
              <i className="las la-shopping-cart"></i>
              <span>Order History</span>
            </a>
          </div>

          <div className={`item ${currentContent === 'XML Products' ? 'current' : ''}`}>
            <a href="#!" onClick={() => setCurrentContent('XML Products')}>
              <i className="las la-code"></i>
              <span>XML Products</span>
            </a>
          </div>

          <div className={`item ${currentContent === 'Logout' ? 'current' : ''}`}>
            <Link to={'/log-off'}>
              <i className="las la-sign-out-alt"></i>
              <span>Logout</span>
            </Link>
          </div>

          <div className="clear"></div>
        </div>
      </div>
      {renderContent()}

      
      
    </div>
  );
};

export default AccountPage;
