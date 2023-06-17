
import React from 'react' ;
import DownArrow from "../../src/Images/down-arrow.png";

function Section(props) {
  console.log(props)
  return (
    <div className="Wrap">
      <div className="ItemText">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="Buttons">
        <div className="ButtonGroup">

          <div className="LeftButton">
           {props.leftBtnText}
          </div>

          <div className='RightButton'>
           {props.rightBtnText}
          </div>

        </div>

        <div className="DownArrow">
          <img src={DownArrow} className="ArrowImage" />
        </div>

      </div>

      
      

    </div>
  )
}

export default Section