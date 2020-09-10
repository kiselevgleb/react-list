import React from 'react';

function Listing(props) {
  return (
    <div className="item-list">
      {props.items.map(item =>

        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt=""></img>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title.length < 50 ? item.title : item.title.slice(0, 50) +"..."}</p>
            <p className="item-price">{item.currency_code==="USD"&&"$"||item.currency_code==="EUR"&&"€"||item.currency_code==="GBP"&&"GBP"}{item.price} </p>
            <p className={`item-quantity ${item.quantity<10&&"level-low"||item.quantity<20&&"level-medium"||item.quantity>20&&"level-high"}`}>{item.quantity} left</p>
          </div>
        </div>)}
    </div>);
}
Listing.defaultProps = {
  items: 0
};
export default Listing;
