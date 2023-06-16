
import React from 'react' ;
import DownArrow from "../Images/down-arrow.png";

function Section() {
  return (
    <div className="Wrap">
      <div className="ItemText">
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </div>

      <div className="Buttons">
        <div className="ButtonGroup">

          <div className="LeftButton">
            Custom Order
          </div>

          <div className='RightButton'>
            Existing Inventory
          </div>

        </div>

        <div className="DownArrow">
          <img src={DownArrow} />
        </div>
        
      </div>

      
      

    </div>
  )
}

export default Section